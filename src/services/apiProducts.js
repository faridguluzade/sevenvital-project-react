import supabase from "./supabase";

const PAGE_SIZE = 8;

export const getProducts = async () => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .range(0, 7);

  if (error) {
    throw new Error("Products not found");
  }

  return data;
};

export const getFilteredProducts = async ({ filter, sortBy, page }) => {
  const defaultPageSize = 8;
  const additionalPageSize = 4;

  let query = supabase.from("products").select("*");

  if (filter) {
    query = query.eq(filter, true);
  }

  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  const offset = (page - 1) * PAGE_SIZE;

  if (page === 1) {
    query = query.range(offset, offset + defaultPageSize - 1);
  } else {
    query = query.range(
      offset,
      offset + defaultPageSize + additionalPageSize - 1
    );
  }

  const { data, error } = await query;

  if (error) {
    throw new Error("Products could not be loaded");
  }

  return data;
};

export const getSearchedProducts = async (searchValue) => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .ilike("name", `%${searchValue}%`);

  if (error) {
    throw new Error("Products not found");
  }

  if (!data.length) {
    throw new Error("Nothing found");
  }

  return data;
};

import supabase from "./supabase";

export const PAGE_SIZE = 8;

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
  let query = supabase.from("products").select("*", { count: "exact" });

  if (filter) {
    query = query.eq(filter, true);
  }

  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, count, error } = await query;

  if (error) {
    throw new Error("Products could not be loaded");
  }

  return { data, count };
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

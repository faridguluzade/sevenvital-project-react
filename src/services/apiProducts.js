import supabase from "./supabase";

export const getProducts = async () => {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    throw new Error("Products could not be loaded");
  }

  return data;
};

export const getSearchedProducts = async (searchValue) => {
  let { data, error } = await supabase
    .from("products")
    .select("*")
    .ilike("name", `%${searchValue}%`);

  if (error) {
    throw new Error("Products not found");
  }

  return data;
};

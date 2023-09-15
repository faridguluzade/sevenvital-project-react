import supabase from "./supabase";

export const getProducts = async () => {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    throw new Error("Products could not be loaded");
  }

  return data;
};

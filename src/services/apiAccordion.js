import supabase from "./supabase";

export const getAccordions = async () => {
  let { data, error } = await supabase.from("accordions").select("*");

  if (error) {
    throw new Error("Accordions could not be loaded");
  }

  return data;
};

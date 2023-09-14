import supabase from "./supabase";

export const getMagazines = async () => {
  const { data, error } = await supabase.from("magazines").select("*");

  if (error) {
    throw new Error("Magazines could not be loaded");
  }

  return data;
};

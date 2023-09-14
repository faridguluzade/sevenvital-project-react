import supabase from "./supabase";

export const getTestimonials = async () => {
  let { data, error } = await supabase.from("testimonials").select("*");

  if (error) {
    throw new Error("Testimonials could not be loaded");
  }
  return data;
};

import supabase from "./supabase";

export const insertContact = async (contact) => {
  const { data, error } = await supabase
    .from("contacts")
    .insert([contact])
    .select();

  if (error) {
    throw new Error("Message could not be sended");
  }

  return data;
};

import supabase from "./supabase";

export const getCartByUserId = async (userId) => {
  const { data: cart, error } = await supabase
    .from("cart")
    .select("*, products(name, imageFront)")
    .eq("userId", userId);

  if (error) {
    throw new Error(error.message);
  }

  return cart;
};

export const updateCartItem = async (id, updatedData) => {
  const { data, error } = await supabase
    .from("cart")
    .update(updatedData)
    .eq("id", id)
    .select("id, quantity, totalPrice")
    .single();

  if (error) {
    throw new Error("Could not be updated count!");
  }

  return data;
};

export const addItemToCart = async ({ productId, userId, price }) => {
  const { data, error } = await supabase
    .from("cart")
    .insert([{ productId, userId, price, quantity: 1, totalPrice: price * 1 }])
    .select("*, products(name, imageFront)")
    .single();

  if (error) {
    throw new Error("Product could not be added to the cart!");
  }

  return data;
};

export const deleteItem = async (id) => {
  const { data, error } = await supabase.from("cart").delete().eq("id", id);

  if (error) {
    throw new Error("Product could not be deleted!");
  }

  return data;
};

export const deleteAll = async (userId) => {
  const { data, error } = await supabase
    .from("cart")
    .delete()
    .eq("userId", userId);

  if (error) {
    throw new Error("Products could not be deleted!");
  }

  return data;
};

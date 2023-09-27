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

export const updateCartItem = async (userId, productId, obj) => {
  const { updatedCart, error } = await supabase
    .from("cart")
    .update(obj)
    .eq("userId", userId)
    .eq("productId", productId)
    .select();

  if (error) throw new Error("Product could not be added to the cart!");

  return updatedCart;
};

export const addItemToCart = async ({ productId, userId, price }) => {
  // 1. Check IF the product EXIST in the CART
  const { data: existingItem } = await supabase
    .from("cart")
    .select("price, totalPrice, quantity")
    .eq("userId", userId)
    .eq("productId", productId)
    .single();

  if (existingItem) {
    existingItem.quantity++;
    existingItem.totalPrice = existingItem.price * existingItem.quantity;

    // UPDATE Cart
    await updateCartItem(userId, productId, existingItem);
  } else {
    // 2. If there is NO product ADD to the CART
    const { error } = await supabase
      .from("cart")
      .insert([
        { productId, userId, price, quantity: 1, totalPrice: price * 1 },
      ])
      .select();

    if (error) {
      throw new Error("Product could not be added to the cart!");
    }
  }

  const data = await getCartByUserId(userId);

  return data;
};

export const deleteItem = async (id) => {
  const { data, error } = await supabase.from("cart").delete().eq("id", id);

  if (error) {
    throw new Error("Product could not be deleted");
  }

  return data;
};

// export const updateCartCount = async (id, obj) => {
//   const { data, error } = await supabase
//     .from("cart")
//     .update(obj)
//     .eq("id", id)
//     .select();

//   if (error) {
//     throw new Error("Could not be updated count!");
//   }

//   return data;
// };

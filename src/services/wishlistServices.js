import { supabase } from "../supabase";

// Get logged in user
async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

// Check if product already exists
export async function isWishlisted(productId) {
  const user = await getUser();

  if (!user) return false;

  const { data } = await supabase
    .from("wishlist")
    .select("id")
    .eq("user_id", user.id)
    .eq("product_id", productId)
    .maybeSingle();

  return !!data;
}

// Add to wishlist
export async function addToWishlist(productId) {
  const user = await getUser();

  if (!user) return false;

  const { error } = await supabase
    .from("wishlist")
    .insert({
      user_id: user.id,
      product_id: productId,
    });

  if (error) throw error;

  return true;
}

// Remove
export async function removeFromWishlist(productId) {
  const user = await getUser();

  if (!user) return false;

  const { error } = await supabase
    .from("wishlist")
    .delete()
    .eq("user_id", user.id)
    .eq("product_id", productId);

  if (error) throw error;

  return true;
}

// Fetch wishlist
export async function getWishlist() {
  const user = await getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("wishlist")
    .select(`
      id,
      product_id,
      products (*)
    `)
    .eq("user_id", user.id);

  if (error) throw error;

  return data;
}
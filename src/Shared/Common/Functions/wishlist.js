// Get wishlist items from localStorage
export const getWishlistItems = () => {
  const wishlistItems = localStorage.getItem('wishlistItems');
  return wishlistItems ? JSON.parse(wishlistItems) : [];
};

// Add item to wishlist
export const addToWishlist = (productId) => {
  const wishlistItems = getWishlistItems();
  if (!wishlistItems.includes(productId)) {
    wishlistItems.push(productId);
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  }
};

// Remove item from wishlist
export const removeFromWishlist = (productId) => {
  const wishlistItems = getWishlistItems();
  const updatedWishlist = wishlistItems.filter(id => id !== productId);
  localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlist));
};

// Check if item is in wishlist
export const isInWishlist = (productId) => {
  const wishlistItems = getWishlistItems();
  return wishlistItems.includes(productId);
}; 
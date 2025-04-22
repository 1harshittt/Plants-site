import toast from "react-hot-toast";
import { allItems } from "./Arrays";

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let count = parseInt(localStorage.getItem("Count")) || 0;

export const addToCart = (itemId) => {
  const newItem = allItems.find((item) => item.id === itemId);

  // Check if the item already exists in the cart
  const existingItem = cart.find((item) => item.id === itemId);

  if (existingItem) {
    toast.error("Item already exists in the cart");
  } else {
    cart = [...cart, newItem];
    count++;
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("Count", count.toString());
    toast.success("Product Added To Cart");
  }
};

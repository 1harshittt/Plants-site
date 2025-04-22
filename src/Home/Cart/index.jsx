import React, { useEffect, useState } from "react";
import "./Cart.scss";
import { RxCross2 } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Cart = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    const itemsWithQuantity = items.map(item => {
      // Handle price parsing for both string and number formats
      let price = item.price;
      if (typeof price === 'string') {
        // Remove 'Rs. ' and convert to number
        price = parseInt(price.replace(/[^0-9]/g, ""));
      }
      return {
        ...item,
        quantity: 1,
        price: price
      };
    });
    setCartItems(itemsWithQuantity);
    setCount(parseInt(localStorage.getItem("Count")) || 0);
  }, [isOpen]);

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setSubtotal(total);
    
    // Update localStorage with the modified items
    const itemsToStore = cartItems.map(item => ({
      ...item,
      price: typeof item.price === 'number' ? `Rs. ${item.price}` : item.price
    }));
    localStorage.setItem("cart", JSON.stringify(itemsToStore));
    const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    localStorage.setItem("Count", totalCount.toString());
    setCount(totalCount);
  }, [cartItems]);

  const closeCart = () => {
    onClose();
  };

  // Apply CSS to hide scrollbar when the cart is open
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast.success("Item removed from cart");
  };

  const updateQuantity = (id, change) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const handleCheckout = () => {
    if (!termsAccepted) {
      toast.error("Please accept the terms & conditions");
      return;
    }
    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    // Implement checkout logic here
    toast.success("Proceeding to checkout...");
  };

  return (
    <div>
      <div className={`cart ${isOpen ? "open" : ""}`}>
        <div className="cart-head">
          <h2>Shopping cart</h2>
          <span className="closebtn" onClick={closeCart}>
            <RxCross2 className="head-cross-icon" />
          </span>
        </div>
        {cartItems.length === 0 ? (
          <div className="empty-mini-cart">
            <FiShoppingCart className="shopping-icon" />
            <span>No items added to your cart</span>
            <Link to="/products" onClick={closeCart}>
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="mini-cart">
              {cartItems.map((item) => (
                <div className="mini-cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="mini-cart-item-info">
                    <h3>{item.name}</h3>
                    <p>Rs. {item.price}</p>
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, -1)}>
                        <FiMinus />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>
                        <FiPlus />
                      </button>
                    </div>
                  </div>
                  <div className="item-total">
                    Rs. {item.price * item.quantity}
                  </div>
                  <div className="cancel">
                    <MdOutlineCancel
                      className="cancel-icon"
                      onClick={() => removeFromCart(item.id)}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="billing">
              <p>
                Total Items: <span>{count}</span>
              </p>
              <div className="checkout-part">
                <div className="total">
                  <label>Subtotal</label>
                  <span>Rs. {subtotal}</span>
                </div>
                <div className="align-part">
                  <div className="cart-agreement">
                    <input 
                      type="checkbox" 
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                    />
                    <label>
                      <p>
                        I agree with the <span>terms & conditions</span>
                      </p>
                    </label>
                  </div>

                  <div 
                    className="checkout-button common-button-scss"
                    onClick={handleCheckout}
                  >
                    <span>Checkout</span>
                  </div>
                  <Link 
                    to="/cart" 
                    className="viewcart-button common-button-scss"
                    onClick={closeCart}
                  >
                    <span>View Cart</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {isOpen && <div className="cart-overlay" onClick={closeCart} />}
    </div>
  );
};

export default Cart;

import React, { useEffect, useState } from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiMinus, FiPlus } from "react-icons/fi";
import toast from "react-hot-toast";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    const loadCartItems = () => {
      const items = JSON.parse(localStorage.getItem('cart')) || [];
      const itemsWithQuantity = items.map(item => {
        let price = item.price;
        if (typeof price === 'string') {
          price = parseInt(price.replace(/[^0-9]/g, ""));
        }
        return {
          ...item,
          quantity: 1,
          price: price
        };
      });
      setCartItems(itemsWithQuantity);
      calculateSubtotal(itemsWithQuantity);
    };

    loadCartItems();
    window.addEventListener('storage', loadCartItems);

    return () => {
      window.removeEventListener('storage', loadCartItems);
    };
  }, []);

  const calculateSubtotal = (items) => {
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setSubtotal(total);
  };

  const updateQuantity = (id, change) => {
    const updatedItems = cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedItems);
    calculateSubtotal(updatedItems);
    
    // Update localStorage
    const itemsToStore = updatedItems.map(item => ({
      ...item,
      price: typeof item.price === 'number' ? `Rs. ${item.price}` : item.price
    }));
    localStorage.setItem('cart', JSON.stringify(itemsToStore));
    const totalCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
    localStorage.setItem('Count', totalCount.toString());
  };

  const removeFromCart = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    calculateSubtotal(updatedItems);
    
    // Update localStorage
    const itemsToStore = updatedItems.map(item => ({
      ...item,
      price: typeof item.price === 'number' ? `Rs. ${item.price}` : item.price
    }));
    localStorage.setItem('cart', JSON.stringify(itemsToStore));
    const totalCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
    localStorage.setItem('Count', totalCount.toString());
    toast.success('Item removed from cart');
  };

  const handleCheckout = () => {
    if (!termsAccepted) {
      toast.error('Please accept the terms & conditions');
      return;
    }
    if (cartItems.length === 0) {
      toast.error('Your cart is empty');
      return;
    }
    toast.success('Proceeding to checkout...');
  };

  return (
    <div className="cart-page">
      <div className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <BiChevronRight />
          <span>Shopping Cart</span>
        </div>
      </div>

      <div className="cart-content">
        <div className="container">
          <div className="cart-header">
            <h1>Shopping Cart</h1>
            <p>{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</p>
          </div>

          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <FiShoppingCart className="shopping-icon" />
              <h2>Your cart is empty</h2>
              <p>Browse our categories and discover our best deals!</p>
              <Link to="/products" className="continue-shopping">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="cart-grid">
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-card">
                    <div className="image-content">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <div className="item-info">
                        <h3>{item.name}</h3>
                        <p className="price">Rs. {item.price}</p>
                      </div>
                      <div className="item-actions">
                        <div className="quantity-controls">
                          <button onClick={() => updateQuantity(item.id, -1)}>
                            <FiMinus />
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)}>
                            <FiPlus />
                          </button>
                        </div>
                        <div className="item-total">
                          Rs. {item.price * item.quantity}
                        </div>
                        <button 
                          className="remove-button"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <RiDeleteBinLine />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="cart-summary">
                <h2>Order Summary</h2>
                <div className="summary-details">
                  <div className="summary-row">
                    <span>Subtotal</span>
                    <span>Rs. {subtotal}</span>
                  </div>
                  <div className="summary-row">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="summary-total">
                    <span>Total</span>
                    <span>Rs. {subtotal}</span>
                  </div>
                </div>
                <div className="cart-agreement">
                  <input 
                    type="checkbox" 
                    id="terms"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                  />
                  <label htmlFor="terms">
                    I agree with the <span>terms & conditions</span>
                  </label>
                </div>
                <button 
                  className="checkout-button"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </button>
                <Link to="/products" className="continue-shopping-link">
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage; 
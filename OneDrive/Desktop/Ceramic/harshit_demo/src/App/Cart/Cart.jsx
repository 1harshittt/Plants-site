import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { FaTrash, FaHeart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { 
  removeFromCart, 
  updateCartItemQuantity, 
  clearCart,
  selectCartItems, 
  selectCartTotalAmount 
} from '../../Redux/features/cart/cartSlice';
import { addToWishlist } from '../../Redux/features/wishlist/wishlistSlice';
import './Cart.scss';

const Cart = ({ fullPage = false }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotalAmount);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleRemoveFromCart = (id, name) => {
    dispatch(removeFromCart(id));
    toast.error(`${name} removed from cart`);
  };

  const handleQuantityChange = (id, newQuantity, name) => {
    if (newQuantity > 0) {
      dispatch(updateCartItemQuantity({ id, quantity: newQuantity }));
      toast.success(`Updated ${name} quantity`);
    }
  };

  const handleMoveToWishlist = (item) => {
    dispatch(addToWishlist(item));
    dispatch(removeFromCart(item.id));
    toast.success(`${item.name} moved to wishlist`);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.error('Cart cleared');
  };

  const formatPrice = (price) => {
    const numPrice = Number(price);
    return isNaN(numPrice) ? "0.00" : numPrice.toFixed(2);
  };

  const handleCheckout = () => {
    if (!fullPage) {
      navigate('/checkout');
      return;
    }
    setIsCheckingOut(true);
    toast.success('Processing your order...');
    // Add your checkout logic here
  };

  return (
    <div className={`cart-page ${fullPage ? 'full-page' : ''}`}>
      <div className="cart-container">
        <motion.div 
          className="cart-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Shopping Cart</h1>
          {cartItems.length > 0 && (
            <button className="clear-cart" onClick={handleClearCart}>
              Clear Cart
            </button>
          )}
        </motion.div>

        {cartItems.length === 0 ? (
          <motion.div 
            className="empty-cart"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2>Your cart is empty</h2>
            <p>Add some items to your cart to get started!</p>
            <Link to="/shop" className="continue-shopping">
              Continue Shopping
            </Link>
          </motion.div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map((item) => (
                <motion.div 
                  key={item.id} 
                  className="cart-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="description">{item.description}</p>
                    <div className="price-quantity">
                      <p className="price">${formatPrice(item.price)}</p>
                      <div className="quantity-controls">
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1, item.name)}
                          className="quantity-btn"
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1, item.name)}
                          className="quantity-btn"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="item-actions">
                    <button 
                      className="wishlist-btn"
                      onClick={() => handleMoveToWishlist(item)}
                      title="Move to Wishlist"
                    >
                      <FaHeart />
                    </button>
                    <button 
                      className="remove-btn"
                      onClick={() => handleRemoveFromCart(item.id, item.name)}
                      title="Remove from Cart"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="cart-summary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2>Order Summary</h2>
              <div className="summary-details">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${formatPrice(totalAmount)}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>FREE</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>${formatPrice(totalAmount)}</span>
                </div>
              </div>
              <button 
                className={`checkout-btn ${isCheckingOut ? 'loading' : ''}`}
                onClick={handleCheckout}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
              </button>
              <Link to="/shop" className="continue-shopping">
                Continue Shopping
              </Link>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart; 
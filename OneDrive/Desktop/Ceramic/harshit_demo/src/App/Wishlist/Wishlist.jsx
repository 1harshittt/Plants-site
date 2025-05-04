import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { FaTrash, FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { 
  removeFromWishlist,
  selectWishlistItems 
} from '../../Redux/features/wishlist/wishlistSlice';
import { addToCart } from '../../Redux/features/cart/cartSlice';
import './Wishlist.scss';

const Wishlist = ({ fullPage = false }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlistItems = useSelector(selectWishlistItems);

  const handleRemoveFromWishlist = (id, name) => {
    dispatch(removeFromWishlist(id));
    toast.error(`${name} removed from wishlist`);
  };

  const handleMoveToCart = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
    dispatch(removeFromWishlist(item.id));
    toast.success(`${item.name} moved to cart`);
  };

  const formatPrice = (price) => {
    const numPrice = Number(price);
    return isNaN(numPrice) ? "0.00" : numPrice.toFixed(2);
  };

  const handleViewFullWishlist = () => {
    if (!fullPage) {
      navigate('/wishlist/full');
    }
  };

  return (
    <div className={`wishlist-page ${fullPage ? 'full-page' : ''}`}>
      <div className="wishlist-container">
        <motion.div 
          className="wishlist-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>My Wishlist</h1>
          {wishlistItems.length > 0 && (
            <div className="header-actions">
              <span className="item-count">{wishlistItems.length} items</span>
              {!fullPage && (
                <button className="view-full" onClick={handleViewFullWishlist}>
                  View Full Wishlist
                </button>
              )}
            </div>
          )}
        </motion.div>

        {wishlistItems.length === 0 ? (
          <motion.div 
            className="empty-wishlist"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2>Your wishlist is empty</h2>
            <p>Add items to your wishlist while shopping!</p>
            <Link to="/shop" className="continue-shopping">
              Continue Shopping
            </Link>
          </motion.div>
        ) : (
          <div className="wishlist-grid">
            {wishlistItems.map((item) => (
              <motion.div 
                key={item.id} 
                className="wishlist-item"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                  <div className="item-actions">
                    <button 
                      className="cart-btn"
                      onClick={() => handleMoveToCart(item)}
                      title="Move to Cart"
                    >
                      <FaShoppingCart />
                    </button>
                    <button 
                      className="remove-btn"
                      onClick={() => handleRemoveFromWishlist(item.id, item.name)}
                      title="Remove from Wishlist"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="description">{item.description}</p>
                  <div className="price-stock">
                    <span className="price">${formatPrice(item.price)}</span>
                    <span className={`stock-status ${item.inStock ? 'in-stock' : 'out-of-stock'}`}>
                      {item.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist; 
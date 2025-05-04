import React from 'react';
import './SideWishlist.scss';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectWishlistItems, removeFromWishlist } from '../../../../Redux/features/wishlist/wishlistSlice';
import { addToCart } from '../../../../Redux/features/cart/cartSlice';
import toast from 'react-hot-toast';

const SideWishlist = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(selectWishlistItems);

  const handleRemoveFromWishlist = (itemId, name) => {
    dispatch(removeFromWishlist(itemId));
    toast.error(`${name} removed from wishlist`);
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
    dispatch(removeFromWishlist(item.id));
    toast.success(`${item.name} added to cart`);
  };

  return (
    <div className={`side-wishlist ${isOpen ? 'open' : ''}`}>
      <div className="wishlist-header">
        <h2>My Wishlist</h2>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
      
      <div className="wishlist-content">
        {wishlistItems.length === 0 ? (
          <div className="empty-wishlist">
            <p>Your wishlist is empty</p>
            <Link to="/shop" className="shop-now" onClick={onClose}>
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            <div className="wishlist-items">
              {wishlistItems.map((item) => (
                <div key={item.id} className="wishlist-item">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="price">${item.price}</p>
                  </div>
                  <div className="item-actions">
                    <button 
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(item)}
                      title="Add to Cart"
                    >
                      <FaCartShopping />
                    </button>
                    <button 
                      className="remove-btn"
                      onClick={() => handleRemoveFromWishlist(item.id, item.name)}
                      title="Remove from Wishlist"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="wishlist-footer">
              <Link to="/wishlist" className="view-full-wishlist" onClick={onClose}>
                View Full Wishlist
              </Link>
              <Link to="/shop" className="continue-shopping" onClick={onClose}>
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SideWishlist; 
import React, { useState, useEffect } from 'react';
import './Wishlist.scss';
import { Link } from 'react-router-dom';
import { BiChevronRight } from 'react-icons/bi';
import { IoBagHandleOutline } from 'react-icons/io5';
import { RiDeleteBinLine } from 'react-icons/ri';
import { plantproducts } from '../Shared/Common/Functions/Arrays';
import { getWishlistItems, removeFromWishlist } from '../Shared/Common/Functions/wishlist';
import { addToCart } from '../Shared/Common/Functions/addToCart';

const Wishlist = () => {
  const [wishlistProducts, setWishlistProducts] = useState([]);

  useEffect(() => {
    const loadWishlistProducts = () => {
      const wishlistIds = getWishlistItems();
      const products = plantproducts.filter(product => wishlistIds.includes(product.id));
      setWishlistProducts(products);
    };

    loadWishlistProducts();
    // Add event listener for storage changes
    window.addEventListener('storage', loadWishlistProducts);

    return () => {
      window.removeEventListener('storage', loadWishlistProducts);
    };
  }, []);

  const handleRemoveFromWishlist = (productId) => {
    removeFromWishlist(productId);
    setWishlistProducts(prev => prev.filter(product => product.id !== productId));
  };

  const handleAddToCart = (productId) => {
    addToCart(productId);
    handleRemoveFromWishlist(productId);
  };

  return (
    <div className="wishlist">
      <div className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <BiChevronRight />
          <span>Wishlist</span>
        </div>
      </div>

      <div className="wishlist-content">
        <div className="container">
          <div className="wishlist-header">
            <h1>My Wishlist</h1>
            <p>{wishlistProducts.length} {wishlistProducts.length === 1 ? 'item' : 'items'}</p>
          </div>

          {wishlistProducts.length === 0 ? (
            <div className="empty-wishlist">
              <h2>Your wishlist is empty</h2>
              <p>Add items that you like to your wishlist. Review them anytime and easily move them to the cart.</p>
              <Link to="/products" className="continue-shopping">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="wishlist-grid">
              {wishlistProducts.map((product) => (
                <div key={product.id} className="wishlist-card">
                  <div className="image-content">
                    <img src={product.image} alt={product.name} />
                    <button 
                      className="remove-button"
                      onClick={() => handleRemoveFromWishlist(product.id)}
                    >
                      <RiDeleteBinLine />
                    </button>
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <div className="price">{product.price}</div>
                    <button 
                      className="add-to-cart"
                      onClick={() => handleAddToCart(product.id)}
                    >
                      <IoBagHandleOutline className="bag-icon-cart" />
                      <span>Move to Cart</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist; 
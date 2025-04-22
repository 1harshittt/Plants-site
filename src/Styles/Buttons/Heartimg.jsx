import React, { useState, useEffect } from "react";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import { addToWishlist, removeFromWishlist, isInWishlist } from "../../Shared/Common/Functions/wishlist";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Heartimg.scss";

const HeartImg = ({ productId }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(isInWishlist(productId));
  }, [productId]);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isActive) {
      removeFromWishlist(productId);
      toast.info('Removed from wishlist', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      addToWishlist(productId);
      toast.success('Added to wishlist', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsActive(!isActive);

    // Trigger storage event to update wishlist count in header
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <button className="heart-button" onClick={handleClick}>
      {isActive ? (
        <RiHeartFill className="heart-icon filled" />
      ) : (
        <RiHeartLine className="heart-icon" />
      )}
    </button>
  );
};

export default HeartImg; 
import React, { useState } from "react";
import "./Header.scss";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { TfiMenu } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectCartTotalQuantity } from '../../../Redux/features/cart/cartSlice';
import { selectWishlistItemCount } from '../../../Redux/features/wishlist/wishlistSlice';
import Sidecart from "./Side-Cart/Sidecart";
import SideWishlist from "./Side-Wishlist/SideWishlist";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isWishlistOpen, setWishlistOpen] = useState(false);
  const cartQuantity = useSelector(selectCartTotalQuantity);
  const wishlistCount = useSelector(selectWishlistItemCount);

  const toggleCart = () => {
    setCartOpen(prev => !prev);
    if (isWishlistOpen) setWishlistOpen(false);
  };

  const toggleWishlist = () => {
    setWishlistOpen(prev => !prev);
    if (isCartOpen) setCartOpen(false);
  };

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="header">
      <div className={`sidenav ${isNavOpen ? "open" : ""}`}>
        <div className="closebtn" onClick={closeNav}>
          &times;
        </div>
        <Link className="menu-item" to={"/"}>
          Home
        </Link>
        <Link className="menu-item" to={"/about"}>
          About
        </Link>
        <Link className="menu-item" to={"/shop"} onClick={closeNav}>
          Shop
        </Link>
        <Link className="menu-item" to={"/profile"} onClick={closeNav}>
          Profile
        </Link>
        <Link className="menu-item" to={"/cart"} onClick={closeNav}>
          Cart
        </Link>
        <Link className="menu-item" to={"/wishlist"} onClick={closeNav}>
          Wishlist
        </Link>
      </div>

      <div className="bg-color">
        <div className="Container head-flex">
          <div className="logo">
            <Link to="/">
              <p>CeramicShop</p>
            </Link>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <Link to={"/"}>HOME</Link>
              </li>
              <li>
                <Link to={"/about"}>ABOUT</Link>
              </li>
              <li>
                <Link to={"/shop"}>SHOP</Link>
              </li>
              <li>
                <Link to={"/profile"}>PROFILE</Link>
              </li>
            </ul>
          </nav>
          <div className="icons-container">
            <button onClick={toggleWishlist} className="wishlist">
              <FaRegHeart className="wishlist-icon" />
              <span className="wishlist-count">{wishlistCount}</span>
            </button>
            <button onClick={toggleCart} className="cart">
              <FaCartShopping className="cart-icon" />
              <span className="cart-count">{cartQuantity}</span>
            </button>
          </div>
          <div className="menu-side">
            {isNavOpen ? (
              <div className="closebtn" onClick={closeNav}>
                &times;
              </div>
            ) : (
              <TfiMenu className="menu-icon" onClick={openNav} />
            )}
          </div>
        </div>
      </div>

      <Sidecart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
      <SideWishlist isOpen={isWishlistOpen} onClose={() => setWishlistOpen(false)} />
    </div>
  );
}

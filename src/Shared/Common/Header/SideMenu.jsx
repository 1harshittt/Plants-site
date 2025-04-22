import React from 'react';
import { Link } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { IoSearchOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { RiHeartLine } from "react-icons/ri";
import './SideMenu.scss';

const SideMenu = ({ isOpen, onClose, wishlistCount }) => {
  return (
    <div className={`side-menu ${isOpen ? 'open' : ''}`}>
      <div className="side-menu-overlay" onClick={onClose}></div>
      <div className="side-menu-content">
        <div className="side-menu-header">
          <button className="close-button" onClick={onClose}>
            <RiCloseLine />
          </button>
        </div>

        <div className="search-section">
          <div className="search-container">
            <IoSearchOutline className="search-icon" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <nav className="side-navigation">
          <ul>
            <li>
              <Link to="/" onClick={onClose}>Home</Link>
            </li>
            <li className="has-submenu">
              <Link to="/products" onClick={onClose}>Products</Link>
            </li>
            <li className="has-submenu">
              <Link to="/hot-deals" onClick={onClose}>Hot Deals</Link>
            </li>
            <li>
              <Link to="/about" onClick={onClose}>About</Link>
            </li>
          </ul>
        </nav>

        <div className="mobile-actions">
          <Link to="/account" className="action-item" onClick={onClose}>
            <RiAccountCircleLine />
            <span>Account</span>
          </Link>
          <Link to="/wishlist" className="action-item" onClick={onClose}>
            <div className="icon-with-badge">
              <RiHeartLine />
              {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
            </div>
            <span>Wishlist</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideMenu; 
import React, { useEffect, useState } from "react";
import "./Header.scss";
import Logo from "../../../Assets/Logo/logo.png";
import dropimg1 from "../../../Assets/Images/drop-img1.avif";
import dropimg2 from "../../../Assets/Images/drop-img2.avif";
import dropimg3 from "../../../Assets/Images/drop-img3.avif";
import dropimg4 from "../../../Assets/Images/drop-img4.avif";
import dropimg5 from "../../../Assets/Images/drop-img5.avif";
import dropimg6 from "../../../Assets/Images/drop-img6.avif";
import dropimg7 from "../../../Assets/Images/drop-img7.avif";
import dropimg8 from "../../../Assets/Images/drop-img8.avif";
import { IoSearchOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { RiHeartLine } from "react-icons/ri";
import { RiShoppingBagLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import Cart from "../../../Pages/Cart/MiniCart";
import { getWishlistItems } from "../../Common/Functions/wishlist";
import SideMenu from "./SideMenu";

const Header = () => {
  const [isTopInfoCollapsed, setIsTopInfoCollapsed] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(getWishlistItems().length);

  useEffect(() => {
    const handleStorageChange = () => {
      setWishlistCount(getWishlistItems().length);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const toggleTopInfoHeight = () => {
    setIsTopInfoCollapsed(!isTopInfoCollapsed);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const count = parseInt(localStorage.getItem("Count")) || 0;

  return (
    <div className="sticky">
      <div className="header">
        <div className={`top-info ${isTopInfoCollapsed ? "collapsed" : ""}`}>
          <h2>
            Happiness is availing great offers on hongo, Free shipping on all
            india delivery.
          </h2>
          <RxCross2 className="head-cross-icon" onClick={toggleTopInfoHeight} />
        </div>
        <div className="container">
          <div className="menu-icon" onClick={toggleSideMenu}>
            <HiOutlineMenu className="icon" />
          </div>
          <Link to="/">
            <img src={Logo} alt="logo-img" />
          </Link>
          <nav className="navigation-menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="products-dropdown">
                <Link to="/products">Products</Link>
                <div className="dropdown-of-products">
                  <div className="dropdown-content-products">
                    <div className="sub-div">
                      <ul class="submenu sub-menu">
                        <li class="back-wrapper d-block">Best plants</li>
                        <li class="level2">
                          <a>Indoor plants</a>
                        </li>
                        <li class="level2">
                          <a>Flowering plants</a>
                        </li>
                        <li class="level2">
                          <a>Air purifying plants</a>
                        </li>

                        <li class="level2">
                          <a>Low light plants</a>
                        </li>
                        <li class="level2">
                          <a>Cacti and succulents</a>
                        </li>
                        <li class="level2">
                          <a>Hanging plants</a>
                        </li>
                        <li class="level2">
                          <a>Fruit plant</a>
                        </li>
                      </ul>
                    </div>
                    <div className="sub-div">
                      <ul class="submenu sub-menu">
                        <li class="back-wrapper d-block">
                          All seeds for plants
                        </li>
                        <li class="level2">
                          <a>Flower seeds</a>
                        </li>
                        <li class="level2">
                          <a>Vegetable seeds</a>
                        </li>
                        <li class="level2">
                          <a>Herb seeds</a>
                        </li>
                        <li class="level2">
                          <a>Microgreen seeds</a>
                        </li>
                        <li class="level2">
                          <a>Fruit seeds</a>
                        </li>
                        <li class="level2">
                          <a>Flower bulbs</a>
                        </li>
                        <li class="level2">
                          <a>Tree & grass seeds</a>
                        </li>
                      </ul>
                    </div>
                    <div className="sub-div">
                      <ul class="submenu sub-menu">
                        <li class="back-wrapper d-block">Pots and planters</li>
                        <li class="level2">
                          <a>Plastic pots</a>
                        </li>
                        <li class="level2">
                          <a>Ceramic pots</a>
                        </li>
                        <li class="level2">
                          <a>Metal planters</a>
                        </li>
                        <li class="level2">
                          <a>Hanging planters</a>
                        </li>
                        <li class="level2">
                          <a>Plant stands</a>
                        </li>
                        <li class="level2">
                          <a>Zuri collection</a>
                        </li>
                        <li class="level2">
                          <a>Basket planters</a>
                        </li>
                      </ul>
                    </div>
                    <div className="sub-div">
                      <a href="/">
                        <img src={dropimg1} alt="dropimg" />
                      </a>
                      <div className="banner-button">
                        <a href="/">
                          <span>Indoor plants</span>
                        </a>
                      </div>
                    </div>
                    <div className="sub-div">
                      <a href="/">
                        <img src={dropimg2} alt="dropimg" />
                      </a>
                      <div className="banner-button">
                        <a href="/">
                          <span>Outdoor plants</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="hot-deals-dropdown">
                <Link>Hot Deals</Link>
                <div className="dropdown-of-hot-deals">
                  <div className="dropdown-content-hot-deals">
                    <Link to={"/beginners"}>
                      <div className="sub-div-hot-deals">
                        <a href="/">
                          <img src={dropimg3} alt="dropimg3" />
                        </a>
                        <a href="/">
                          <span>10% 0ff</span>
                        </a>
                      </div>
                    </Link>
                    <Link to={"/floweringplants"}>
                      <div className="sub-div-hot-deals">
                        <a href="/">
                          <img src={dropimg4} alt="dropimg4" />
                        </a>
                        <a href="/">
                          <span>15% off</span>
                        </a>
                      </div>
                    </Link>
                    <Link to={"/beginners"}>
                      <div className="sub-div-hot-deals">
                        <a href="/">
                          <img src={dropimg5} alt="dropimg5" />
                        </a>
                        <a href="/">
                          <span>20% 0ff</span>
                        </a>
                      </div>
                    </Link>
                    <Link to={"/floweringplants"}>
                      <div className="sub-div-hot-deals">
                        <a href="/">
                          <img src={dropimg6} alt="dropimg6" />
                        </a>
                        <a href="/">
                          <span>25% 0ff</span>
                        </a>
                      </div>
                    </Link>
                    <Link to={"/forbeginners"}>
                      <div className="sub-div-hot-deals">
                        <a href="/">
                          <img src={dropimg7} alt="dropimg7" />
                        </a>
                        <a href="/">
                          <span>30% 0ff</span>
                        </a>
                      </div>
                    </Link>
                    <Link to={"/floweringplants"}>
                      <div className="sub-div-hot-deals">
                        <a href="/">
                          <img src={dropimg8} alt="dropimg8" />
                        </a>
                        <a href="/">
                          <span>35% 0ff</span>
                        </a>
                      </div>
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <div className="search-bar">
            <IoSearchOutline className="search-icon" />
            <input type="text" placeholder="Search..." />
          </div>
          <div className="user-actions">
            <RiAccountCircleLine className="account-icon" />
            <Link to="/account" className="user-action">
              Account
            </Link>
            <div className="wishlist-icon-count">
              <Link to="/wishlist" className="user-action">
                <RiHeartLine className="wish-icon" />
                {wishlistCount > 0 && (
                  <div className="wishlist-count-wrapper">
                    <p>{wishlistCount}</p>
                  </div>
                )}
              </Link>
            </div>
            <div className="cart-icon-count">
              <RiShoppingBagLine className="cart-icon" onClick={openCart} />
              <div className="cart-count-wrapper">
                <p>{count}</p>
              </div>
            </div>

            <button onClick={openCart} className="cart-btn">
              <span className="circle1"></span>
              <span className="circle2"></span>
              <span className="circle3"></span>
              <span className="circle4"></span>
              <span className="circle5"></span>
              <span className="text">Cart</span>
            </button>
          </div>
        </div>
        <Cart isOpen={isCartOpen} onClose={closeCart} />
        <SideMenu 
          isOpen={isSideMenuOpen} 
          onClose={() => setIsSideMenuOpen(false)} 
          wishlistCount={wishlistCount}
        />
      </div>
    </div>
  );
};

export default Header;

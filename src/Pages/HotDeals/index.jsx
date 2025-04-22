import React, { useState, useEffect } from "react";
import "./HotDeals.scss";
import { IoFilterSharp } from "react-icons/io5";
import { FaFire } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import HeartImg from "../../Styles/Buttons/Heartimg";
import { addToCart } from "../../Shared/Common/Functions/addToCart";
import { plants } from "../../Shared/Common/Functions/Arrays";
import { motion } from "framer-motion";

const HotDeals = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 15,
    minutes: 30,
    seconds: 0,
  });

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState(10000);
  const [sortBy, setSortBy] = useState("featured");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft.seconds > 0) {
        setTimeLeft({ ...timeLeft, seconds: timeLeft.seconds - 1 });
      } else if (timeLeft.minutes > 0) {
        setTimeLeft({
          ...timeLeft,
          minutes: timeLeft.minutes - 1,
          seconds: 59,
        });
      } else if (timeLeft.hours > 0) {
        setTimeLeft({
          ...timeLeft,
          hours: timeLeft.hours - 1,
          minutes: 59,
          seconds: 59,
        });
      } else if (timeLeft.days > 0) {
        setTimeLeft({
          ...timeLeft,
          days: timeLeft.days - 1,
          hours: 23,
          minutes: 59,
          seconds: 59,
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Filter products based on selected criteria
  const filteredProducts = plants
    .filter((product) => {
      const price = parseInt(product.price.replace("₹", "").replace(",", ""));
      return (
        (selectedCategory === "all" || product.category === selectedCategory) &&
        price <= priceRange
      );
    })
    .sort((a, b) => {
      if (sortBy === "price-low-high") {
        return (
          parseInt(a.price.replace("₹", "").replace(",", "")) -
          parseInt(b.price.replace("₹", "").replace(",", ""))
        );
      } else if (sortBy === "price-high-low") {
        return (
          parseInt(b.price.replace("₹", "").replace(",", "")) -
          parseInt(a.price.replace("₹", "").replace(",", ""))
        );
      }
      return 0;
    });

  return (
    <div className="hot-deals">
      {/* Hero Section */}
      <div className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <div className="hero-text">
            <h1>
              Hot Deals <FaFire className="fire-icon" />
            </h1>
            <p>Exclusive offers that you can't resist!</p>
          </div>
          <div className="countdown-timer">
            <div className="timer-block">
              <span className="number">{timeLeft.days}</span>
              <span className="label">Days</span>
            </div>
            <div className="timer-block">
              <span className="number">{timeLeft.hours}</span>
              <span className="label">Hours</span>
            </div>
            <div className="timer-block">
              <span className="number">{timeLeft.minutes}</span>
              <span className="label">Minutes</span>
            </div>
            <div className="timer-block">
              <span className="number">{timeLeft.seconds}</span>
              <span className="label">Seconds</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Filter Section */}
      <div className="filter-section">
        <button
          className="filter-toggle"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <IoFilterSharp /> Filters
        </button>
        <div className={`filter-options ${isFilterOpen ? "open" : ""}`}>
          <div className="filter-group">
            <label>Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Plants</option>
              <option value="indoor">Indoor Plants</option>
              <option value="outdoor">Outdoor Plants</option>
              <option value="flowering">Flowering Plants</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Price Range: ₹{priceRange}</label>
            <input
              type="range"
              min="100"
              max="10000"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            />
          </div>
          <div className="filter-group">
            <label>Sort By:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="featured">Featured</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            className="product-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -10 }}
          >
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="product-overlay">
                <div className="heart-icon">
                  <HeartImg />
                </div>
                <button
                  className="add-to-cart"
                  onClick={() => addToCart(product.id)}
                >
                  <IoBagHandleOutline />
                  Add to Cart
                </button>
              </div>
              <div className="discount-badge">-30%</div>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <div className="price-container">
                <span className="original-price">
                  ₹{parseInt(product.price.replace("₹", "").replace(",", "")) * 1.3}
                </span>
                <span className="discounted-price">{product.price}</span>
              </div>
              <div className="stock-status">
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${Math.random() * 60 + 20}%` }}
                  ></div>
                </div>
                <span>Selling Fast!</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HotDeals; 
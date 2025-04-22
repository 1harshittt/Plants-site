import React, { useState } from "react";
import "./Products.scss";
import HeartImg from "../Styles/Buttons/Heartimg";
import { IoBagHandleOutline } from "react-icons/io5";
import { plantproducts } from "../Shared/Common/Functions/Arrays";
import { addToCart } from "../Shared/Common/Functions/addToCart";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState("all");

  const categories = [
    "All",
    "For Beginners",
    "Flowering Plants",
    "Decor Plants",
    "Pet Friendly Plants",
    "Blooming Plants",
    "Air Purifying Plants",
  ];

  const sortOptions = [
    { label: "Featured", value: "featured" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "Name: A-Z", value: "name-asc" },
    { label: "Name: Z-A", value: "name-desc" },
  ];

  const filterProducts = (products) => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Sort products
    switch (sortBy) {
      case "price-asc":
        filtered.sort(
          (a, b) =>
            parseInt(a.price.replace(/[^0-9]/g, "")) -
            parseInt(b.price.replace(/[^0-9]/g, ""))
        );
        break;
      case "price-desc":
        filtered.sort(
          (a, b) =>
            parseInt(b.price.replace(/[^0-9]/g, "")) -
            parseInt(a.price.replace(/[^0-9]/g, ""))
        );
        break;
      case "name-asc":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    return filtered;
  };

  const filteredProducts = filterProducts(plantproducts);

  return (
    <div className="products">
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="bg-cover">
        <div className="breadcrumb">
          <div className="container">
            <Link to="/">Home</Link>
            <FiChevronRight />
            <span>Products</span>
          </div>
        </div>
        <div className="bg-img">
          <div className="container">
            <h1>All Plants & Trees</h1>
            <p>Find the perfect plant to bring life to your space</p>
          </div>
        </div>
        <div className="categories-section">
          <div className="container">
            <div className="categories-list">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? "active" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="products-section">
            <div className="head-texts">
              <div className="results-count">
                <h3>Showing {filteredProducts.length} products</h3>
              </div>
              <div className="sort-section">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="cards-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="card">
                  <div className="image-content">
                    <img src={product.image} alt={product.name} />
                    <div className="heart">
                      <HeartImg productId={product.id} />
                    </div>
                    <div className="addToCart">
                      <button onClick={() => addToCart(product.id)}>
                        <IoBagHandleOutline className="bag-icon-cart" />
                        <span>Add To Cart</span>
                      </button>
                    </div>
                  </div>
                  <div className="bottom-content">
                    <h3>{product.name}</h3>
                    <div className="price">{product.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

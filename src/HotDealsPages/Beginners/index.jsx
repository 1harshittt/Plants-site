import React from "react";
import "./Beginners.scss";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { IoBagHandleOutline } from "react-icons/io5";
import HeartImg from "../../Styles/Buttons/Heartimg";
import { plantproducts } from "../../Shared/Common/Functions/Arrays";
import { addToCart } from "../../Shared/Common/Functions/addToCart";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Beginners = () => {
  // Filter products for beginners
  const beginnerProducts = plantproducts.filter(product => product.category === "For Beginners");

  return (
    <div className="beginners">
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
      <div className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <BiChevronRight />
          <Link to="/products">Products</Link>
          <BiChevronRight />
          <span>Plants for Beginners</span>
        </div>
      </div>

      <div className="bg-cover">
        <div className="bg-img">
          <div className="container">
            <h1>Plants for Beginners</h1>
            <p>Start your plant journey with these easy-to-care-for varieties</p>
          </div>
        </div>

        <div className="products-section">
          <div className="cards-grid">
            {beginnerProducts.map((product) => (
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
  );
};

export default Beginners; 
import React from "react";
import "./FloweringPlants.scss";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { IoBagHandleOutline } from "react-icons/io5";
import HeartImg from "../../Styles/Buttons/Heartimg";
import { plantproducts } from "../../Shared/Common/Functions/Arrays";
import { addToCart } from "../../Shared/Common/Functions/addToCart";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FloweringPlants = () => {
  // Filter products for flowering plants
  const floweringProducts = plantproducts.filter(product => product.category === "Flowering Plants");

  return (
    <div className="flowering-plants">
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
          <span>Flowering Plants</span>
        </div>
      </div>

      <div className="bg-cover">
        <div className="bg-img">
          <div className="container">
            <h1>Flowering Plants</h1>
            <p>Bring color and life to your space with our beautiful flowering plants</p>
          </div>
        </div>

        <div className="products-section">
          <div className="cards-grid">
            {floweringProducts.map((product) => (
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

export default FloweringPlants;

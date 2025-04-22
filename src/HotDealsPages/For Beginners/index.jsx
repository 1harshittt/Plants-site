import React from "react";
import "./ForBeginners.scss";
import HeartImg from "../../Styles/Buttons/Heartimg";
import { IoBagHandleOutline } from "react-icons/io5";
import { plantproducts } from "../../Shared/Common/Functions/Arrays";
import { addToCart } from "../../Shared/Common/Functions/addToCart";
const ForBeginners = () => {
  return (
    <div className="products">
      <div className="bg-cover">
        <div className="bg-img">
          <h1>For Beginners</h1>
        </div>
        <div className="flex-part">
          <div className="collection-sidebar">
            <ul className="list-types">
              <li>
                <h2>Collection</h2>
              </li>
              <li>For Beginners</li>
              <li>Flowering plants</li>
              <li>Decor plants</li>
              <li>Pet friendly plants</li>
              <li>Blooming plants</li>
              <li>All plant and tree</li>
            </ul>
          </div>
          <div className="products-collection">
            <div className="head-texts">
              <div>
                <h3>Showing of {plantproducts.length} products</h3>
              </div>
              <div>
                <h3>Add To Favourites</h3>
              </div>
            </div>

            <div className="cards-grid">
              {plantproducts.map((product) => (
                <div key={product.id} className="card cover-bg hero-2content">
                  <div className="image-content">
                    <img src={product.image} alt={product.name} />
                    <div className="heart">
                      <HeartImg />
                    </div>
                    <div className="addToCart">
                      <button onClick={() => addToCart(product.id)}>
                        <IoBagHandleOutline className="bag-icon-cart" />
                        <span> Add To Cart</span>
                      </button>
                    </div>
                  </div>
                  <div className="bottom-content">
                    <a href="#">{product.name}</a>
                    <div>
                      <span>{product.price}</span>
                    </div>
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

export default ForBeginners;

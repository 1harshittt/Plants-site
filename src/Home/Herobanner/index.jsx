import React from "react";
import "./Herobanner.scss";
import heartimg from "../../Assets/Images/heart.svg";
import heroimg from "../../Assets/Images/heroimg.webp";
import HeartImg from "../../Styles/Buttons/Heartimg";
import { IoBagHandleOutline } from "react-icons/io5";
import { product } from "../../Shared/Common/Functions/Arrays";
import { addToCart } from "../../Shared/Common/Functions/addToCart";

const Herobanner = () => {
  return (
    <div className="container">
      <div className="herobanner">
        <div className="flex-content">
          <div className="hero1">
            <div className="image-1">
              <img src={heroimg} alt="heroimg" />
            </div>
          </div>
          {product.map((item) => (
            <div key={item.id} className="hero2">
              <div className="cover-bg hero-2content">
                <div className="head-content">
                  <div className="section-sub-heading">
                    A LIVING GIFT - UPTO 30% OFF
                  </div>
                  <h3 className="section-heading alt-font">Special plants</h3>
                </div>
                <div className="image-content">
                  <img src={item.image} alt={`img1`} />
                  <div className="heart">
                    <HeartImg />
                  </div>
                  <div className="addToCart">
                    <button onClick={() => addToCart(item.id)}>
                      <IoBagHandleOutline className="bag-icon-cart" />
                      <span> Add To Cart</span>
                    </button>
                  </div>
                </div>
                <div className="bottom-content">
                  <a href="#">{item.name}</a>
                  <div>
                    <span>{item.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Herobanner;

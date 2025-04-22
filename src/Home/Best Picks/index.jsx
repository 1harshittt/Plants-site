import React from "react";
import "./BestPicks.scss";
import HeartImg from "../../Styles/Buttons/Heartimg";
import { IoBagHandleOutline } from "react-icons/io5";
import { plants } from "../../Shared/Common/Functions/Arrays";
import { addToCart } from "../../Shared/Common/Functions/addToCart";

const BestPicks = () => {
  return (
    <div className="bestpicks">
      <div className="section-sub-heading">GET OFF 10% ALL PLANTS</div>
      <h3 className="section-heading alt-font">Your Best Picks</h3>
      <div className="cards-grid">
        {plants.map((plant) => (
          <div key={plant.id} className="card cover-bg hero-2content">
            <div className="image-content">
              <img src={plant.image} alt={`plant${plant.id}`} />
              <div className="heart">
                <HeartImg />
              </div>
              <div className="addToCart">
                {/* Use addToCart function when the button is clicked */}
                <button onClick={() => addToCart(plant.id)}>
                  <IoBagHandleOutline className="bag-icon-cart" />
                  <span> Add To Cart</span>
                </button>
              </div>
            </div>
            <div className="bottom-content">
              <a href="#">{plant.name}</a>
              <div>
                <span>{plant.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestPicks;

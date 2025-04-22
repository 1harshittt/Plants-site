import React from "react";
import "./PopularCategories.scss";
import { GoArrowRight } from "react-icons/go";

// Import your images
import gridimg1 from "../../Assets/Images/plant17.webp";
import gridimg2 from "../../Assets/Images/plant18.webp";
import gridimg3 from "../../Assets/Images/plant19.webp";
import gridimg4 from "../../Assets/Images/plant20.webp";

export default function PopularCategories() {
  // Define an array of category objects
  const categories = [
    { img: gridimg1, name: "For Beginners" },
    { img: gridimg2, name: "Flowering plants" },
    { img: gridimg3, name: "Decor plants" },
    { img: gridimg4, name: "Pet friendly plants" },
  ];

  return (
    <div>
      <div className="popular-categories">
        <div className="popular-categories-content">
          <div className="popular-categories-head">
            <span>FIND PLANTS YOU'LL LOVE</span>
            <h3>Popular categories</h3>
          </div>
          <div className="popular-categories-body">
            {/* Map over the categories array to render each category */}
            {categories.map((category, index) => (
              <div className="popular-categories-card" key={index}>
                <img src={category.img} alt="image" />
                <div className="popular-categories-card-text">
                  <h5>{category.name}</h5>
                  <div className="action-wrapper">
                    <GoArrowRight className="arrow-icon" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

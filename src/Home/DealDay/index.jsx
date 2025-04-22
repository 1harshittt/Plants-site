import React from "react";
import "./DealDay.scss";
import dealimg from "../../Assets/Images/dealday.webp";
import Responsive from "./Slider";

export default function DealDay() {
  return (
    <div>
      <div className="deal-day-wrapper">
        <div className="deal-day">
          <div className="deal-img">
            <img src={dealimg} alt="DEALIMG" />
          </div>
          <div className="slider-part-wrapper">
            <div className="slider-part">
              <div className="slider-head">
                <h2>Deal of the day</h2>
                <span>Most demanded products.</span>
              </div>
              <div className="slider">
                <Responsive />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

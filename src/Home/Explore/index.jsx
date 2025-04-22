import React from "react";
import "./Explore.scss";
const Explore = () => {
  return (
    <div className="explore">
      <div className="explore-padding">
        <div className="explore-content">
          <h2 className="explore-text">
            Explore the latest shopping related offers
          </h2>
        </div>
        <div className="card-content">
          <div className="cardgap">
            <div className="card">
              <div className="title-wrap">
                <p>Season Sale</p>
                <span>Popular Collections</span>
              </div>
              <div className="button">
                <a href="#">
                  <span>SHOP NOW</span>
                </a>
              </div>
            </div>
          </div>
          <div className="cardgap">
            <div className="card">
              <div className="title-wrap">
                <p>Hot under Rs.9999</p>
                <span>Trending this week</span>
              </div>
              <div className="button">
                <a href="#">
                  <span>SHOP NOW</span>
                </a>
              </div>
            </div>
          </div>
          <div className="cardgap">
            <div className="card">
              <div className="title-wrap">
                <p>New arrivals</p>
                <span>Season collection</span>
              </div>
              <div className="button">
                <a href="#">
                  <span>SHOP NOW</span>
                </a>
              </div>
            </div>
          </div>
          <div className="cardgap">
            <div className="card">
              <div className="title-wrap">
                <p>Flat 70% off</p>
                <span>Last chance sale</span>
              </div>
              <div className="button">
                <a href="#">
                  <span>SHOP NOW</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;

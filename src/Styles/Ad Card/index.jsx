import React from "react";
import { useState, useEffect } from "react";
import "./AdCard.scss";
import adimg from "../../Assets/Images/Ad-img.webp";
import { RxCross1 } from "react-icons/rx";

export default function AdCard() {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCard(true);
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clean up the timer to prevent memory leaks
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs only once after initial render

  const handleClose = () => {
    setShowCard(false);
  };
  return (
    <div>
      {showCard && (
        <div className="adcard-overlay">
          <div className="adcard-container">
            <RxCross1
              className="cancel-icon"
              onClick={() => {
                handleClose();
              }}
            />
            <div className="adcard">
              <img src={adimg} alt="Advert" />
            </div>
            <div className="adcard-text">
              <h3>Join our newsletter and get 20% off your first order</h3>
              <p>
                Subscribe to our newsletter and get the latest trending products
                and offers updates.
              </p>
              <div className="adcard-form">
                <input type="text" placeholder="Enter your email address" />
                <button>SUBSCRIBE</button>
              </div>
              <div className="cart-agreement">
                <input type="checkbox" />
                <label>
                  <p>Don't show this popup again</p>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

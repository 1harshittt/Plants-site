import React from "react";
import "./Footer.scss";
import paymentimg from "../../../Assets/Images/payment-img.avif";
import { HiOutlineMail } from "react-icons/hi";
import { BiChevronDown } from "react-icons/bi";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container-foot">
          <div className="foot-flex">
            <div className="footer-wrap1">
              <div className="blockhead">Categories</div>
              <ul className="footer-menu">
                <li>For Beginners</li>
                <li>Flowering plants</li>
                <li>Decor plants</li>
                <li>Pet-friendly plants</li>
                <li>All plant and tree</li>
              </ul>
            </div>
            <div className="footer-wrap1">
              <div className="blockhead">Quick links</div>
              <ul className="footer-menu">
                <li>About us</li>
                <li>Our services</li>
                <li>Latest articles</li>
                <li>Deal of the day</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className="footer-wrap1">
              <div className="blockhead">Information</div>
              <ul className="footer-menu">
                <li>Order history</li>
                <li>Customer support</li>
                <li>Terms & conditions</li>
                <li>Returns & exchanges</li>
                <li>Shipping & delivery</li>
              </ul>
            </div>
            <div className="footer-wrap2">
              <h5>Subscribe to newsletter</h5>
              <p>Sign up and enjoy 10% off your first order.</p>
              <form className="email">
                <input
                  type="text"
                  name="form-type"
                  placeholder="Enter your email"
                />
                <HiOutlineMail className="mail-icon" />
              </form>
              <div className="payment">
                <img src={paymentimg} alt="paymentimg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

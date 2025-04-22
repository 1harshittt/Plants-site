import React from "react";
import "./About.scss";
import aboutimg1 from "../Assets/Images/about-img1.webp";
import aboutimg2 from "../Assets/Images/about-img2.webp";
import aboutimg3 from "../Assets/Images/aboutimg3.svg";
import aboutimg4 from "../Assets/Images/aboutimg4.svg";
import aboutimg5 from "../Assets/Images/aboutimg5.svg";
import aboutimg6 from "../Assets/Images/aboutimg6.svg";
import customerimg from "../Assets/Images/customer.jpg";
import { FaPlay } from "react-icons/fa";
const About = () => {
  return (
    <div>
      <div className="about-us">
        <div className="bg-img">
          <h1>About us</h1>
        </div>
        <div className="about-wrapper">
          <div className="about-img">
            <img src={aboutimg1} alt="aboutimg1" />
          </div>
          <div className="about-text">
            <h2>START FROM SINCE 1987</h2>
            <h3>Journey into about hongo garden & plants.</h3>
            <p>
              At [Company Name], we're passionate about innovation and
              excellence. With a dedicated team driven by creativity and
              expertise, we strive to redefine industry standards.Join us on our
              journey towards success and let's create a brighter future
              together.
            </p>
            <a href="/">
              <span>EXPLORE PRODUCTS</span>
            </a>
          </div>
        </div>
        <div className="customer-img">
          <img src={customerimg} alt="customer-img" />
        </div>
        <div className="video-section">
          <div className="video-container">
            <div className="content-wrapper">
              <a
                href="https://www.youtube.com/watch?v=UZ_JZaNQrAw&list=RDMM-2RAq5o5pwc&index=2"
                className="popup-video"
              >
                <FaPlay className="play-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="about-wrapper">
          <div className="about-img-2">
            <img src={aboutimg2} alt="aboutimg2" />
          </div>
          <div className="about-text-2">
            <h2>OVERVIEW OF GREENHOUSE</h2>
            <h3>Overview of hongo garden and plants greenhouse.</h3>
            <div className="pane1">
              <span>Greenhouse vision.</span>
            </div>
            <div className="pane1">
              <span>Our greenhouse mission.</span>
            </div>
            <div className="pane1">
              <span>Value of our greenhouse.</span>
            </div>
          </div>
        </div>
        <div className="shopify-template">
          <div className="round">
            <img src={aboutimg3} alt="aboutimg3" />
            <span>Wide variety of plants</span>
            <p>Lorem ipsum is simply dummy text printing typesetting.</p>
          </div>
          <div className="round">
            <img src={aboutimg4} alt="aboutimg3" />
            <span>Wide variety of plants</span>
            <p>Lorem ipsum is simply dummy text printing typesetting.</p>
          </div>
          <div className="round">
            <img src={aboutimg5} alt="aboutimg3" />
            <span>Wide variety of plants</span>
            <p>Lorem ipsum is simply dummy text printing typesetting.</p>
          </div>
          <div className="round">
            <img src={aboutimg6} alt="aboutimg3" />
            <span>Wide variety of plants</span>
            <p>Lorem ipsum is simply dummy text printing typesetting.</p>
          </div>
        </div>
        <div className="door-step">
          Delivery to your door We’ll bring your plants to your door,
          <a href="/"> anywhere in Hongo</a>
        </div>
      </div>
    </div>
  );
};

export default About;

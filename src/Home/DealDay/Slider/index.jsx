import React, { useRef } from "react";
import "./Slider.scss";
import Slider from "react-slick";
import HeartImg from "../../../Styles/Buttons/Heartimg";
import img1 from "../../../Assets/Images/plant1.webp";
import img2 from "../../../Assets/Images/plant2.avif";
import img3 from "../../../Assets/Images/plant3.webp";
import img4 from "../../../Assets/Images/plant4.webp";
import img5 from "../../../Assets/Images/plant5.webp";
import img6 from "../../../Assets/Images/plant6.webp";
import img7 from "../../../Assets/Images/plant7.webp";
import img8 from "../../../Assets/Images/plant8.webp";
import img9 from "../../../Assets/Images/plant9.webp";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { plantproducts, plants } from "../../../Shared/Common/Functions/Arrays";
import { IoBagHandleOutline } from "react-icons/io5";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="nextarrow" onClick={onClick}>
      <div className="img">
        <MdOutlineKeyboardArrowRight className="arrow-next" />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="prevarrow" onClick={onClick}>
      <div className="img">
        <MdOutlineKeyboardArrowLeft className="arrow-prev" />
      </div>
    </div>
  );
}

export default function Responsive() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    cssEase: "linear",
    speed: 1000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-wrapper">
      <div className="slider">
        <Slider {...settings}>
          {plants.map((product) => (
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
        </Slider>
      </div>
    </div>
  );
}

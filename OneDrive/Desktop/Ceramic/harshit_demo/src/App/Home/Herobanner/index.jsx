import React from 'react'
import './Herobanner.scss'
import 'animate.css';
import heroimg1 from '../../../Assets/Images/hero-bg-img.jpg'
import heroimg2 from '../../../Assets/Images/hero-bg-img-2.jpg'
import { Link } from 'react-router-dom';

export default function Herobanner() {
  return (
    <div className='Herobanner'>
      <div className="Container">
     <div className="flex-side">
         <div className="hero-texts">
              <h6 className='animate__animated animate__fadeInUp'>WELCOME TO CERAMIC SHOP</h6>
              <h1 className='animate__animated animate__fadeInUp animate__delay-0.7s'>Elevate Your<br/> Space With Ceramic Elegance.</h1>
              <h2>Starting from just $149.00</h2>
             <Link to="/shop"> <button className='button-shop-now animate__animated animate__fadeInUp animate__delay-1s'><span>SHOP NOW</span></button></Link>
         </div>
         <div className="hero-img">
            <div className="hero-img-1">
              <img src={heroimg1}/>
            </div>
            <div className="hero-img-2">
              <img src={heroimg2}/>
            </div>
         </div>
 

     </div>
     </div>
    </div>
  )
}

import React from 'react'
import './Section5.scss'
import { CiStar } from 'react-icons/ci'
import bhatti from '../../../Assets/Images/bhatti.jpg'
import khaby from '../../../Assets/Images/khaby.jpg'
import { TiStarFullOutline } from "react-icons/ti";
import lastimg from '../../../Assets/Images/last-img.jpg'
export default function Section5() {
  return (
    <div className='Section5'>
          <div className="sec5-bg-color">
            <div className="Container">
            <div className="section5-flex">
                 <div className="sec5-texts">
                    <h6>TESTIMONIAL</h6>
                    <h2>What Our  Clients Say</h2>
                 </div>
                 <div className="grid-card-2">
                     <div className="grid-review-card">
                     <div className="star"><TiStarFullOutline className='star-color' /><TiStarFullOutline  className='star-color' /><TiStarFullOutline  className='star-color'/><TiStarFullOutline className='star-color' /><TiStarFullOutline  /></div>
                     <p>The dynamic effects on this site really bring it to life.
                         Each transition and interaction feels polished and professional,
                          enhancing the overall user experience significantly.</p>
                          <div className="about-client">
                            <img src={bhatti} alt="not found" />
                            <p>Prince Bhatti <span>Upcoming Technician :)</span></p>
                          </div>
                     </div>
                     <div className="grid-review-card">
                     <div className="star"><TiStarFullOutline className='star-color' /><TiStarFullOutline  className='star-color' /><TiStarFullOutline  className='star-color'/><TiStarFullOutline className='star-color' /><TiStarFullOutline className='star-color' /></div>
                     <p>Navigating this website is a delight! The animations are smooth and intuitive, making the experience both engaging and effortless. I love how seamless everything feels!</p>
                          <div className="about-client">
                            <img src={khaby} alt="not found" />
                            <p>Mit barvaliya <span>DSA artist :)</span></p>
                          </div>
                     </div>
                 </div>
            </div>
            </div>
              <div className="last-bgcolor">       
            <div className="last-section">
            <img src={lastimg} alt="not found" />
                 <div className="last-texts">
                 <h6>Uncover the World of Ceramic Artistry Start
                 Your Journey Here!</h6>
                 <button className='button-shop-now'><span>SHOP NOW</span></button>
         </div>
         </div>
            </div>
          </div>
    </div>
  )
}

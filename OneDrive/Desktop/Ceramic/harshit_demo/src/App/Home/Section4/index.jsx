import React from 'react'
import './Section4.scss'
import sec4img1 from '../../../Assets/Images/sec4-img1.jpg'
import sec4img2 from '../../../Assets/Images/sec4-img2.jpg'
import { CiStar } from 'react-icons/ci'

export default function Section4() {
  return (
    <div className='Section4'>
               <div className="sec4-bg">
          <div className="Container">
                <div className="sec4-content">
                  <div className="sec4-texts">
                  <h2>Begin Your Ceramic Journey Explore Our Stunning Collections</h2>
                    <h4>Starting from just $149.00</h4>
                    <div className="button-shop-now">
                            <button><span>SHOP NOW</span></button>
                         </div>
                  </div>
                </div>
           </div>
           </div>
                <div className="Container">
                <div className="section4-flex">
                 <div className="sec4-texts">
                    <h6>TRENDING NOW</h6>
                    <h2>Minimalist Ceramic Designs</h2>
                 </div>
                <div className="card-grid">
                     <div className="sec4card">
                        <div className="card-img">
                            <img src={sec4img1} alt='not found'/>
                         <div className="shopbutton"> <button className="button-shop" role="button">Add to Cart</button></div>
                        </div>
                        <div className="card-content">
                              <p>CERAMIC</p>
                              <h2>CERAMIC CUP</h2>
                              <CiStar/><CiStar/><CiStar/><CiStar/><CiStar/>
                             <div className="price"> <del>$237.00</del>   <span>$189.00</span></div>
                        </div>
                       </div>
                     <div className="sec4card">
                        <div className="card-img">
                            <img src={sec4img2} alt='not found'/>
                         <div className="shopbutton"> <button className="button-shop" role="button">Add to Cart</button></div>
                        </div>
                        <div className="card-content">
                              <p>CERAMIC</p>
                              <h2>CERAMIC CUP</h2>
                              <CiStar/><CiStar/><CiStar/><CiStar/><CiStar/>
                             <div className="price"> <del>$237.00</del>   <span>$189.00</span></div>
                        </div>
                       </div>
                     <div className="sec4card">
                        <div className="card-img">
                            <img src={sec4img1} alt='not found'/>
                         <div className="shopbutton"> <button className="button-shop" role="button">Add to Cart</button></div>
                        </div>
                        <div className="card-content">
                              <p>CERAMIC</p>
                              <h2>CERAMIC CUP</h2>
                              <CiStar/><CiStar/><CiStar/><CiStar/><CiStar/>
                             <div className="price"> <del>$237.00</del>   <span>$189.00</span></div>
                        </div>
                       </div>
                       </div>
                </div>
               </div>
               </div>
  )
}

import React from 'react'
import './Section2.scss'

export default function Section2() {
  return (
    <div className='Section2'>
        <div className="sec2-bg-color">
            <div className="Container">
               <div className="sec2-main-flex">
                <div className="sec2-left">
                    <div className="sec2-texts">
                        <h6>THE BEST OR CERAMICS</h6>
                        <h2>Our Products Category</h2>
                        <p>Explore our exquisite collection of ceramic treasures 
                             that elevate your spaces and celebrate the artistry of craftsmanship.
                             From dinnerware to decor, each piece in our product
                             range is a testament to quality, style, and the timeless beauty of ceramics.</p>
                    </div>
                    <div className="sec2-card">
                        <div className="sec2-card-texts">
                        <h4>Stylish Ceramic Home Decor</h4>
                        <p>Starting from just $99.00</p>
                        </div>
                    </div>
                </div>
                <div className="sec2-right">
                <div className="sec2-card-2">
                        <div className="sec2-card-texts">
                        <h4>Trending Ceramic Dinnerware</h4>
                        <p>Starting from just $299.00</p>
                        </div>
                    </div>
                    <div className="sec2-card-2 card3">
                        <div className="sec2-card-texts">
                        <h4>Garden and Outdoor Accents</h4>
                        <p>Starting from just $149.00</p>
                        </div>
                    </div>
                </div>
               </div>
            </div>
        </div>

    </div>
  )
}

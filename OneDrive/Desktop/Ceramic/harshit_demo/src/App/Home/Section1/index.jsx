import React from 'react'
import './Section1.scss'
import sec1img1 from '../../../Assets/Images/sec1img1.jpg'
import sec1img2 from '../../../Assets/Images/sec1img2.jpg'

export default function Section1() {
  return (
    <div className='Section1'> 
    <div className="Container">
        <div className="section1-flex">
            <div className="sec1-texts">
                 <h6>ABOUT CERAMIC SHOP</h6>
                 <h2>The versatility of ceramics is what makes them truly remarkable, with their presence in various forms such as stoneware and porcelain.</h2>
            </div>
            <div className="sec1-content">
                    <div className="img-1">
                        <img src={sec1img1} alt="pot img content" />
                    </div>
                    <div className="img-2-content">
                        <div className="img-2">
                            <img src={sec1img2} alt='pot img2  content' />

                        </div>
                        <div className="sec1-imgtexts">
                            <h4>Welcome to Ceramic Shop, where passion meets craftsmanship to bring you a world of timeless beauty and creativity.</h4>
                            <p>Our journey is steeped in the art of ceramics, where each piece tells a unique story. Get to know the heart and soul behind our store.</p>
                        </div>
                         <div className="button-shop-now">
                            <button className=''><span>READ MORE</span></button>
                         </div>
                    </div>
            </div>
        </div>
    </div>

    </div>
  )
}

import React from 'react'
import './Footer.scss'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa6'
import { RiTwitterXLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='Footer'>
               <footer className='Container'>
                <div className="footer-content">
                  <div className="logo">
                        <Link to="/">
                          <p>CeramicShop</p>
                        </Link>
                 </div>
           <nav className="nav">
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/shop">SHOP</Link>
              </li>
              <li>
                <Link to="/profile">PROFILE</Link>
              </li>
            </ul>
          </nav>
          <div className="social-media">
          <FaFacebook /><RiTwitterXLine /><FaInstagram /><FaYoutube />
          </div>
                </div>
                <div className="footer-bottom">
                       <div className="copyright">Copyright &copy; 2024</div>
                       <div className="rights">All rights reserved</div>
                </div> 
               </footer>
    </div>
  )
}

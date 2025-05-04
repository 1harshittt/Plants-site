import React, { useState } from 'react'
import './Section3.scss'
import { SiCss3 } from 'react-icons/si'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../Redux/features/cart/cartSlice';
import toast from 'react-hot-toast';
import sec3img1 from '../../../Assets/Images/sec3-img1.jpg';
import sec3img2 from '../../../Assets/Images/sec3-img2.jpg';
import sec3img3 from '../../../Assets/Images/sec3-img3.jpg';
import sec3img4 from '../../../Assets/Images/sec3-img4.jpg';
import sec3img5 from '../../../Assets/Images/sec3-img5.jpg';
import sec3img6 from '../../../Assets/Images/sec3-img6.jpg';
import { CiStar } from "react-icons/ci";
import { motion } from 'framer-motion';

export default function Section3() {
  const dispatch = useDispatch();
  const [addingToCart, setAddingToCart] = useState({});

  const products = [
    {
      id: 'ceramic-cup',
      name: 'CERAMIC CUP',
      category: 'CERAMIC',
      image: sec3img1,
      price: 189.00,
      originalPrice: 237.00,
      description: 'Elegant ceramic cup with modern design'
    },
    {
      id: 'ceramic-planter',
      name: 'CERAMIC PLANTER',
      category: 'CERAMIC',
      image: sec3img2,
      price: 299.00,
      originalPrice: 349.00,
      description: 'Beautiful ceramic planter for your plants'
    },
    {
      id: 'ceramic-plates',
      name: 'CERAMIC PLATES',
      category: 'CERAMIC',
      image: sec3img3,
      price: 119.00,
      originalPrice: 179.00,
      description: 'Set of elegant ceramic plates'
    },
    {
      id: 'ceramic-plates-bowls',
      name: 'CERAMIC PLATES AND BOWLS',
      category: 'CERAMIC',
      image: sec3img4,
      price: 209.00,
      originalPrice: 249.00,
      description: 'Complete set of ceramic plates and bowls'
    },
    {
      id: 'ceramic-plates-spoons',
      name: 'CERAMIC PLATES AND SPOONS',
      category: 'CERAMIC',
      image: sec3img5,
      price: 299.00,
      originalPrice: 349.00,
      description: 'Ceramic plates with matching spoons'
    },
    {
      id: 'ceramic-vases-planters',
      name: 'CERAMIC VASES AND PLANTERS',
      category: 'CERAMIC',
      image: sec3img6,
      price: 217.00,
      originalPrice: 247.00,
      description: 'Collection of ceramic vases and planters'
    }
  ];

  const handleAddToCart = (product) => {
    setAddingToCart(prev => ({ ...prev, [product.id]: true }));
    dispatch(addToCart({
      ...product,
      quantity: 1
    }));
    toast.success(`${product.name} added to cart`);
    setTimeout(() => {
      setAddingToCart(prev => ({ ...prev, [product.id]: false }));
    }, 1000);
  };

  return (
    <div className='Section3'>
         <div className="Container">
            <div className="section3-flex">
                 <div className="sec3-texts">
                    <h6>MOST POPULAR</h6>
                    <h2>Discover the Latest Additions at Your
                    Top Choice Flower Shop</h2>
                 </div>
                 <div className="card-grid">
                     {products.map((product) => (
                       <motion.div 
                         key={product.id}
                         className="sec3card"
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.3 }}
                       >
                        <div className="card-img">
                            <img src={product.image} alt={product.name}/>
                            <div className="shopbutton">
                              <button 
                                className={`button-shop ${addingToCart[product.id] ? 'adding' : ''}`}
                                onClick={() => handleAddToCart(product)}
                                disabled={addingToCart[product.id]}
                              >
                                {addingToCart[product.id] ? 'Adding...' : 'Add to Cart'}
                              </button>
                            </div>
                        </div>
                        <div className="card-content">
                              <p>{product.category}</p>
                              <h2>{product.name}</h2>
                              <div className="stars">
                                <CiStar/><CiStar/><CiStar/><CiStar/><CiStar/>
                              </div>
                              <div className="price">
                                <del>${product.originalPrice.toFixed(2)}</del>
                                <span>${product.price.toFixed(2)}</span>
                              </div>
                        </div>
                       </motion.div>
                     ))}
                 </div>
            </div>
         </div>
    </div>
  )
}

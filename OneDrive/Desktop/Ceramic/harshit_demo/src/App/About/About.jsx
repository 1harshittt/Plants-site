import React from 'react';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaLeaf, FaHistory, FaMedal } from 'react-icons/fa';
import './About.scss';

// Import images
import aboutHero from '../../Assets/Images/hero-bg-img.jpg';
import heritage from '../../Assets/Images/sec1img1.jpg';
import craft1 from '../../Assets/Images/sec2-img1.jpg';
import craft2 from '../../Assets/Images/sec2-img2.jpg';
import craft3 from '../../Assets/Images/sec2-img3.jpg';
import masterImg from '../../Assets/Images/sec3-img1.jpg';
import designerImg from '../../Assets/Images/sec3-img2.jpg';
import artisanImg from '../../Assets/Images/sec3-img3.jpg';
import ctaBg from '../../Assets/Images/sec4-bg-img.jpg';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${aboutHero})`
      }}>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>Our Story</h1>
          <p>Crafting Beauty Since 1990</p>
        </motion.div>
      </section>

      {/* Heritage Section */}
      <section className="heritage-section">
        <motion.div 
          className="heritage-content"
          {...fadeInUp}
        >
          <h2>Our Heritage</h2>
          <p>
            For over three decades, Ceramic Artistry has been at the forefront of 
            handcrafted ceramic excellence. What began as a small pottery studio 
            in 1990 has blossomed into a renowned atelier, where traditional 
            craftsmanship meets contemporary design.
          </p>
          <img src={heritage} alt="Our Heritage" className="heritage-image" />
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <motion.div 
          className="values-grid"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="value-card"
            variants={fadeInUp}
          >
            <FaHandHoldingHeart className="icon" />
            <h3>Artisanal Excellence</h3>
            <p>Every piece is crafted with meticulous attention to detail, ensuring the highest quality in every creation.</p>
          </motion.div>

          <motion.div 
            className="value-card"
            variants={fadeInUp}
          >
            <FaLeaf className="icon" />
            <h3>Sustainability</h3>
            <p>We're committed to eco-friendly practices, using sustainable materials and responsible production methods.</p>
          </motion.div>

          <motion.div 
            className="value-card"
            variants={fadeInUp}
          >
            <FaHistory className="icon" />
            <h3>Heritage</h3>
            <p>Blending traditional techniques with modern innovation to create timeless pieces.</p>
          </motion.div>

          <motion.div 
            className="value-card"
            variants={fadeInUp}
          >
            <FaMedal className="icon" />
            <h3>Quality</h3>
            <p>Uncompromising commitment to excellence in every piece we create.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Craftsmanship Section */}
      <section className="craftsmanship-section">
        <motion.div 
          className="craft-content"
          {...fadeInUp}
        >
          <div className="craft-text">
            <h2>Our Craftsmanship</h2>
            <p>
              Each piece that leaves our workshop tells a story of dedication and artistry. 
              Our master craftsmen combine centuries-old techniques with modern innovation, 
              creating pieces that are both functional and beautiful.
            </p>
            <ul className="craft-features">
              <li>Hand-thrown and hand-finished pieces</li>
              <li>Traditional glazing techniques</li>
              <li>Custom-formulated clay bodies</li>
              <li>Unique surface treatments</li>
            </ul>
          </div>
          <div className="craft-images">
            <div className="craft-image-grid">
              <img src={craft1} alt="Craftsmanship 1" className="craft-image image-1" />
              <img src={craft2} alt="Craftsmanship 2" className="craft-image image-2" />
              <img src={craft3} alt="Craftsmanship 3" className="craft-image image-3" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <motion.div 
          className="team-content"
          {...fadeInUp}
        >
          <h2>Meet Our Artisans</h2>
          <p className="team-intro">
            Our team of skilled artisans brings together decades of experience and 
            a shared passion for ceramic craftsmanship. Each member contributes their 
            unique perspective while maintaining our high standards of quality.
          </p>
          <div className="team-grid">
            <div className="team-member">
              <img src={masterImg} alt="Master Craftsman" className="member-image master" />
              <h3>Master Craftsman</h3>
              <p>30+ years of expertise</p>
            </div>
            <div className="team-member">
              <img src={designerImg} alt="Lead Designer" className="member-image designer" />
              <h3>Lead Designer</h3>
              <p>Innovative designs</p>
            </div>
            <div className="team-member">
              <img src={artisanImg} alt="Senior Artisan" className="member-image artisan" />
              <h3>Senior Artisan</h3>
              <p>Detailed finishing</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="cta-section" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${ctaBg})`
      }}>
        <motion.div 
          className="cta-content"
          {...fadeInUp}
        >
          <h2>Experience Our Craft</h2>
          <p>Visit our workshop and witness the art of ceramic making firsthand.</p>
          <button className="cta-button">Book a Visit</button>
        </motion.div>
      </section>
    </div>
  );
};

export default About; 
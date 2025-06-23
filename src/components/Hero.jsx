import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero-image.png';  // Add your image in src/assets/

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Hi, I’m <span className="highlight">Hatim Ghadyali</span></h1>
        <p>A passionate Computer Science Undergraduate And Web Developer</p>
        <a href="#project" className="hero-btn">View My Work</a>
      </div>
      <div className="hero-image-wrapper">
        <img src={heroImage} alt="Hero" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;

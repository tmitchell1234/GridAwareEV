import React from 'react';
import Logo from '../imgs/Logo.png';
function HomePage(){
    return (
        <div className="homepage">
      <header className="header">
        <div className="navbar">
            <img src={Logo} alt="Our Logo" className="logo" />
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#login">
                <button>Login</button>
            </a>
        </div>
        
      </header>
      <section className="hero">
        <h1>EV Grid Aware</h1>
        <p>Our EV charging solution intelligently regulates energy use, ensuring grid stability and efficient power management.</p>
      </section>
      <section id="features">
        <h2>Features</h2>
        <ul>
          <li>Real-time Grid Monitoring</li>
          <li>Real-time Vehicle Status</li>
          <li>User-friendly Interface</li>
          <li>Energy Efficiency Reports</li>
        </ul>
      </section>
      <section id="benefits">
        <h2>Benefits</h2>
            <ul>
                <li>Grid Stability</li>
                <li>Data and Analysis</li>
                <li>Fleet Management</li>
                <li>Customer Attraction</li>
                <li>Support For Green Initiatives</li>
                <li>Energy Efficiency Reports</li>
            </ul>
      </section>
    </div>
    );
}
export default HomePage;
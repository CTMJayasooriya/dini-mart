import React from "react";
import logo from "../assets/logo.jpg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-column brand-col">
          <div className="footer-brand">
            <img src={logo} alt="Dini Mart" className="footer-logo-img" />
          </div>
          <p className="footer-tagline">Cake Tools & Gift Store</p>
          <p className="footer-desc">
            Your premier destination in Sri Lanka for quality cake tools, baking accessories, personalized gifts, toys, chocolates & craft items.
          </p>

          <div className="footer-contact-info">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <a href="tel:0771367348" className="contact-link">077 136 7348</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>Sri Lanka - Island-wide Delivery Available</span>
            </div>
          </div>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Product Categories</h4>
          <ul className="footer-links">
            <li><a href="#categories">Cake Tools</a></li>
            <li><a href="#categories">Baking Accessories</a></li>
            <li><a href="#categories">Gifts & Surprises</a></li>
            <li><a href="#categories">Toys & Plushies</a></li>
            <li><a href="#categories">Chocolates & Sweets</a></li>
            <li><a href="#categories">Craft Items</a></li>
            <li><a href="#categories">Other Products</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="#shop">Shop All Products</a></li>
            <li><a href="#offers">Special Offers</a></li>
            <li><a href="#about">About Dini Mart</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Connect With Us</h4>
          <p className="social-text">Follow our Facebook page for new arrivals, daily offers & baking tips!</p>
          <a 
            href="https://www.facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="fb-follow-btn"
          >
            <svg className="fb-svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook Page (382+ Followers)
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DINI MART - Cake Tools & Gift Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import "./HeroBanner.css";

function HeroBanner({ onShopClick }) {
  return (
    <section className="hero-banner">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-icon">🎁</span> Official Cake Tools & Gift Store
        </div>

        <h1 className="hero-brand-name">
          DINI <span className="brand-highlight">MART</span>
        </h1>
        <h2 className="hero-subtitle">Cake Tools & Gift Store</h2>
        <p className="hero-description">
          Your one-stop shop for premium baking equipment, cake tools, gifts, plush toys, luxury chocolates & craft supplies!
        </p>

        <div className="hero-contact-strip">
          <a href="tel:0771367348" className="phone-badge">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="phone-icon">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            077 136 7348
          </a>
          <span className="contact-subtext">Call or WhatsApp for Island-wide Delivery</span>
        </div>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={onShopClick}>
            Explore Products
          </button>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <svg className="fb-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Visit Facebook Page
          </a>
        </div>
      </div>

      <div className="hero-features-bar">
        <div className="feature-item">
          <span className="feature-icon">🚚</span>
          <div>
            <strong>Island-wide Delivery</strong>
            <span>Fast & Reliable Shipping</span>
          </div>
        </div>
        <div className="feature-item">
          <span className="feature-icon">⭐</span>
          <div>
            <strong>Top Quality Guaranteed</strong>
            <span>100% Authentic Baking Tools</span>
          </div>
        </div>
        <div className="feature-item">
          <span className="feature-icon">📞</span>
          <div>
            <strong>Direct Order Line</strong>
            <span>Call/WhatsApp 077 136 7348</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;

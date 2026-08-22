import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import cartIcon from "../assets/shopping-cart.png";
import "./Navbar.css";

function Navbar({ searchTerm, setSearchTerm, cartCount = 0, onCategoryClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header-wrapper">
      {/* Top Announcement Strip matching Dini Mart FB Info */}
      <div className="top-announcement-bar">
        <div className="top-bar-container">
          <div className="top-bar-left">
            <span>🎉 Welcome to <strong>Dini Mart</strong> - Cake Tools & Gift Store!</span>
          </div>
          <div className="top-bar-right">
            <a href="tel:0773584730" className="top-phone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="top-icon">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              077 358 4730
            </a>
            <span className="divider">|</span>
            <span className="top-info">Island-wide Delivery 🚚</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="navbar-logo">
            <div className="brand-badge-circle">
              <span className="brand-badge-text">DINI</span>
              <span className="brand-badge-sub">MART</span>
            </div>
            <div className="brand-text-block">
              <span className="brand-title">DINI MART</span>
              <span className="brand-subtitle">Cake Tools & Gift Store</span>
            </div>
          </a>
        </div>

        <div className={`navbar-links ${mobileMenuOpen ? "open" : ""}`}>
          <a href="/" className="active">Home</a>
          <a href="#shop" onClick={() => onCategoryClick && onCategoryClick("all")}>Shop</a>
          <a href="#categories" onClick={() => onCategoryClick && onCategoryClick("all")}>Categories ▾</a>
          <a href="#offers">Offers</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
        </div>

        <div className="navbar-actions">
          <div className="navbar-search">
            <input 
              type="text" 
              placeholder="Search cake tools, gifts..." 
              value={searchTerm || ""}
              onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}
            />
            <button aria-label="Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="search-icon"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>

          <div className="navbar-icons">
            <div className="cart-wrapper">
              <img src={cartIcon} alt="Shopping Cart Icon" className="cart-img" />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </div>
          </div>

          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
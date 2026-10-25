import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";
import cartIcon from "../assets/shopping-cart.png";
import { categories } from "../data/categories";
import "./Navbar.css";

function Navbar({ 
  searchTerm, 
  setSearchTerm, 
  cartCount = 0, 
  onCategoryClick, 
  onOpenCart,
  activeSection = "home"
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(activeSection);

  useEffect(() => {
    setActiveNav(activeSection);
  }, [activeSection]);

  const handleNavClick = (sectionId, categoryId = null) => {
    setActiveNav(sectionId);
    setMobileMenuOpen(false);
    setDropdownOpen(false);

    if (categoryId && onCategoryClick) {
      onCategoryClick(categoryId);
    } else if (sectionId === "shop" && onCategoryClick) {
      onCategoryClick("all");
    }

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="header-wrapper">
      {/* Top Announcement Strip matching Dini Mart FB Info */}
      <div className="top-announcement-bar">
        <div className="top-bar-container">
          <div className="top-bar-left">
            <span>🎉 Welcome to <strong>Dini Mart</strong> - Cake Tools & Gift Store!</span>
          </div>
          <div className="top-bar-right">
            <a href="tel:0771367348" className="top-phone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="top-icon">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              077 136 7348
            </a>
            <span className="divider">|</span>
            <span className="top-info">Island-wide Delivery 🚚</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-left">
          <button 
            className="navbar-logo-btn" 
            onClick={() => handleNavClick("home")}
          >
            <img src={logo} alt="Dini Mart - Cake Tools & Gift Store" className="navbar-logo-img" />
          </button>
        </div>

        <div className={`navbar-links ${mobileMenuOpen ? "open" : ""}`}>
          <button 
            className={`nav-link-btn ${activeNav === "home" ? "active" : ""}`}
            onClick={() => handleNavClick("home")}
          >
            Home
          </button>

          <button 
            className={`nav-link-btn ${activeNav === "shop" ? "active" : ""}`}
            onClick={() => handleNavClick("shop")}
          >
            Shop
          </button>

          {/* Categories Dropdown */}
          <div 
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button 
              className={`nav-link-btn ${activeNav === "categories" ? "active" : ""}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Categories ▾
            </button>

            {dropdownOpen && (
              <div className="categories-dropdown-menu">
                <button 
                  className="dropdown-item all-item"
                  onClick={() => handleNavClick("shop", "all")}
                >
                  ✨ View All Categories
                </button>
                <div className="dropdown-divider"></div>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    className="dropdown-item"
                    onClick={() => handleNavClick("shop", cat.id)}
                  >
                    <img src={cat.image} alt={cat.name} className="dropdown-icon" />
                    <span>{cat.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button 
            className={`nav-link-btn ${activeNav === "offers" ? "active" : ""}`}
            onClick={() => handleNavClick("offers")}
          >
            Offers
          </button>

          <button 
            className={`nav-link-btn ${activeNav === "about" ? "active" : ""}`}
            onClick={() => handleNavClick("about")}
          >
            About Us
          </button>

          <button 
            className={`nav-link-btn ${activeNav === "contact" ? "active" : ""}`}
            onClick={() => handleNavClick("contact")}
          >
            Contact Us
          </button>
        </div>

        <div className="navbar-actions">
          <div className="navbar-search">
            <input 
              type="text" 
              placeholder="Search cake tools, gifts..." 
              value={searchTerm || ""}
              onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}
              onFocus={() => handleNavClick("shop")}
            />
            <button aria-label="Search" onClick={() => handleNavClick("shop")}>
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
            <div 
              className="cart-wrapper" 
              onClick={onOpenCart} 
              title="Open Shopping Cart"
              role="button"
              tabIndex={0}
            >
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
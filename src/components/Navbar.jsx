import logo from "../assets/logo.jpg";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Dini Mart Logo" />
      </div>

      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/products">Shop ▾</a>
        <a href="#">Categories ▾</a>
        <a href="#">Offers</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
      </div>

      <div className="navbar-actions">
        <div className="navbar-search">
          <input type="text" placeholder="Search products..." />
          <button>🔍</button>
        </div>
        <div className="navbar-icons">
          <span>👤</span>
          <span>🛒</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
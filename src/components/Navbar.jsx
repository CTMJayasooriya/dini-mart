import logo from "../assets/logo.jpg";

function Navbar() {
  return (
    <nav>
      <div>
        <img src={logo} alt="Logo" />
      </div>

      <a href="/">Home</a>
      <a href="/products">Shop</a>
      <a href="#">Categories</a>
      <a href="#">Offers</a>
      <a href="/about">About Us</a>
      <a href="/contact">Contact Us</a>

      <input type="text" placeholder="Search products..." />

      <button>Search</button>

      <span>👤</span>
      <span>🛒</span>
    </nav>
  );
}

export default Navbar;
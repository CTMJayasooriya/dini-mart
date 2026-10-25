import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import ShopByCategories from "../components/ShopByCategories";
import ProductCard from "../components/ProductCard";
import OffersSection from "../components/OffersSection";
import AboutSection from "../components/AboutSection";
import CartDrawer from "../components/CartDrawer";
import Footer from "../components/Footer";

import { products } from "../data/products";
import { categories } from "../data/categories";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [activeSection, setActiveSection] = useState("home");

  // Filter products based on search term and selected category
  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const showNotification = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    showNotification(`Added "${product.name}" to cart! 🛒`);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToShop = () => {
    const section = document.getElementById("shop");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    scrollToShop();
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="app-container">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notification">
          <span>{toastMessage}</span>
          <button onClick={() => setIsCartOpen(true)} className="toast-view-btn">
            View Cart
          </button>
        </div>
      )}

      <Navbar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        cartCount={totalCartCount}
        onCategoryClick={handleCategorySelect}
        onOpenCart={() => setIsCartOpen(true)}
        activeSection={activeSection}
      />

      <main>
        {/* Home Hero Banner */}
        <div id="home">
          <HeroBanner onShopClick={scrollToShop} />
        </div>

        {/* Section matching Image 1 */}
        <div id="categories">
          <ShopByCategories onSelectCategory={handleCategorySelect} />
        </div>

        {/* Interactive Products Section (Shop) */}
        <section className="products-section" id="shop">
          <div className="section-container">
            <div className="section-header">
              <div>
                <h2 className="section-title">
                  {selectedCategory === "all"
                    ? "Featured Products"
                    : categories.find((c) => c.id === selectedCategory)?.name || "Products"}
                </h2>
                <p className="section-subtitle">
                  {filteredProducts.length} items available in Dini Mart
                </p>
              </div>

              {/* Category Filter Pills */}
              <div className="category-pills">
                <button
                  className={`pill-btn ${selectedCategory === "all" ? "active" : ""}`}
                  onClick={() => setSelectedCategory("all")}
                >
                  All Items
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`pill-btn ${selectedCategory === cat.id ? "active" : ""}`}
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            ) : (
              <div className="no-products">
                <p>No products found matching "{searchTerm}".</p>
                <button 
                  className="reset-btn"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Offers Section */}
        <OffersSection onAddToCart={handleAddToCart} />

        {/* About Section */}
        <AboutSection />
      </main>

      {/* Cart Drawer Component */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Footer / Contact Section */}
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
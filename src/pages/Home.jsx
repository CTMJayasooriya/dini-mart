import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import ShopByCategories from "../components/ShopByCategories";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

import { products } from "../data/products";
import { categories } from "../data/categories";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);

  // Filter products based on search term and selected category
  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
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

  return (
    <div className="app-container">
      <Navbar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        cartCount={cart.length}
        onCategoryClick={() => handleCategorySelect("all")}
      />

      <main>
        <HeroBanner onShopClick={scrollToShop} />

        {/* Section matching Image 1 */}
        <ShopByCategories onSelectCategory={handleCategorySelect} />

        {/* Interactive Products Section */}
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
      </main>

      <Footer />
    </div>
  );
}

export default Home;
import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";
import "./OffersSection.css";

function OffersSection({ onAddToCart }) {
  // Filter products that have discount prices
  const discountedProducts = products.filter(
    (p) => p.oldPrice && p.oldPrice > p.price
  );

  return (
    <section className="offers-section" id="offers">
      <div className="offers-container">
        <div className="offers-banner">
          <div className="banner-badge">🔥 SPECIAL DEALS & OFFERS</div>
          <h2 className="banner-title">Exclusive Discounts at Dini Mart</h2>
          <p className="banner-subtitle">
            Save big on top baking tools, cupcake sets, gift boxes & sweet treats! Island-wide delivery available.
          </p>
          <div className="promo-pill">
            <span>Use Code: <strong>DINISAVE10</strong> for extra savings!</span>
          </div>
        </div>

        <div className="offers-grid">
          {discountedProducts.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OffersSection;

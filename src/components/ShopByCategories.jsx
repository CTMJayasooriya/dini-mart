import React from "react";
import CategoryCard from "./CategoryCard";
import { categories } from "../data/categories";
import "./ShopByCategories.css";

function ShopByCategories({ onSelectCategory }) {
  return (
    <section className="shop-by-categories-section">
      <div className="categories-container">
        <div className="categories-header">
          <div className="categories-title-wrapper">
            <h2 className="categories-title">
              <span className="accent-text">Shop By</span> Categories
            </h2>
            <div className="title-underline"></div>
          </div>

          <a href="#all-categories" className="view-all-link">
            View All Categories <span className="arrow">→</span>
          </a>
        </div>

        <div className="categories-grid">
          {categories.map((cat) => (
            <CategoryCard 
              key={cat.id} 
              category={cat} 
              onClick={onSelectCategory}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShopByCategories;

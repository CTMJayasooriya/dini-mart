import React from "react";
import "./CategoryCard.css";

function CategoryCard({ category, onClick }) {
  return (
    <div className="category-card" onClick={() => onClick && onClick(category.id)}>
      <div className="category-card-image-wrapper">
        <img 
          src={category.image} 
          alt={category.name} 
          className="category-card-image" 
          loading="lazy"
        />
      </div>
      <div className="category-card-info">
        <h3 className="category-card-title">{category.name}</h3>
      </div>
    </div>
  );
}

export default CategoryCard;

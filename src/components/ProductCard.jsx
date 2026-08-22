import React from "react";
import "./ProductCard.css";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      {product.badge && <span className="product-badge">{product.badge}</span>}
      <div className="product-image-box">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>

      <div className="product-content">
        <div className="product-meta">
          <span className="product-rating">★ {product.rating}</span>
          <span className="product-reviews">({product.reviews})</span>
        </div>

        <h4 className="product-title">{product.name}</h4>

        <div className="product-footer">
          <div className="product-prices">
            <span className="current-price">Rs. {product.price.toLocaleString()}</span>
            {product.oldPrice && (
              <span className="old-price">Rs. {product.oldPrice.toLocaleString()}</span>
            )}
          </div>

          <button className="add-to-cart-btn" onClick={() => onAddToCart && onAddToCart(product)}>
            Add +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

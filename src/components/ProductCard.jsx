import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../slice/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>

      <div className="product-info">
        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.title}</h3>

        <p className="product-description">
          {product.description.slice(0, 80)}...
        </p>

        <div className="product-rating">
          ⭐ {product.rating}
        </div>

        <h3 className="product-price">
          ₹{(product.price * 84).toFixed(0)}
        </h3>

        <div className="product-buttons">
          <Link
            to={`/products/${product.id}`}
            className="view-button"
          >
            View
          </Link>

          <button
            className="cart-button"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../slice/cartSlice";
import useAPI from "../hooks/useAPI";
import Loader from "../components/Loader";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    data: product,
    loading,
    error,
  } = useAPI(`https://dummyjson.com/products/${id}`);

  if (loading) {
    return <Loader />;
  }

  if (error || !product?.id) {
    return (
      <div className="error-message">
        <h2>Product not found</h2>
        <Link to="/products" className="dark-button">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="details-container">
      <div className="details-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>

      <div className="details-content">
        <span className="product-category">
          {product.category}
        </span>

        <h1>{product.title}</h1>

        <div className="details-rating">
          ⭐ {product.rating}
        </div>

        <h2>
          ₹{(product.price * 84).toFixed(0)}
        </h2>

        <p>{product.description}</p>

        <p>
          <strong>Brand:</strong>{" "}
          {product.brand || "ShopEase Brand"}
        </p>

        <p>
          <strong>Stock:</strong> {product.stock}
        </p>

        <button
          className="dark-button"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>

        <Link to="/products" className="back-link">
          ← Back to Products
        </Link>
      </div>
    </div>
  );
}
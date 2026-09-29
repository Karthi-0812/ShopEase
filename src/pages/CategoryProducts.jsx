import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import useAPI from "../hooks/useAPI";

export default function CategoryProducts() {
  const { category } = useParams();

  const {
    data,
    loading,
    error,
  } = useAPI(
    `https://dummyjson.com/products/category/${category}`
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="error-message">
        <h2>Unable to load category</h2>
      </div>
    );
  }

  const products = data?.products || [];

  return (
    <div>
      <div className="category-title">
        <h2>
          {category.charAt(0).toUpperCase() +
            category.slice(1)}
        </h2>

        <p>
          {products.length} products available
        </p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}
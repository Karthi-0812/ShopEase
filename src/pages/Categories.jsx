import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Categories() {
  return (
    <div className="page-container">
      <div className="page-heading">
        <span>SHOP BY CATEGORY</span>
        <h1>Categories</h1>
        <p>Choose a category to explore products.</p>
      </div>

      <div className="category-links">
        <Link to="">All Categories</Link>

        <Link to="smartphones">
          Smartphones
        </Link>

        <Link to="laptops">
          Laptops
        </Link>

        <Link to="fragrances">
          Fragrances
        </Link>

        <Link to="skincare">
          Skincare
        </Link>
      </div>

      <Outlet />
    </div>
  );
}
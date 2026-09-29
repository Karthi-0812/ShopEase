import React from "react";

export default function About() {
  return (
    <div className="page-container">
      <div className="page-heading">
        <span>ABOUT US</span>
        <h1>About ShopEase</h1>
      </div>

      <div className="about-content">
        <div className="about-card">
          <h2>Our Mission</h2>

          <p>
            ShopEase is designed to provide customers with a
            simple and convenient online shopping experience.
          </p>

          <p>
            Our platform brings products from different
            categories together in one easy-to-use application.
          </p>
        </div>

        <div className="about-card">
          <h2>Why Choose Us?</h2>

          <p>
            We focus on simple navigation, useful product
            information and a smooth shopping experience.
          </p>

          <p>
            ShopEase is built using modern React concepts and
            responsive frontend design.
          </p>
        </div>
      </div>

      <div className="about-stats">
        <div>
          <strong>100+</strong>
          <span>Products</span>
        </div>

        <div>
          <strong>10+</strong>
          <span>Categories</span>
        </div>

        <div>
          <strong>24/7</strong>
          <span>Support</span>
        </div>

        <div>
          <strong>100%</strong>
          <span>Frontend Experience</span>
        </div>
      </div>
    </div>
  );
}
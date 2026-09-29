import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h2>ShopEase</h2>
          <p>
            Your simple and modern online shopping destination.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h3>Contact</h3>
          <p>Email: support@shopease.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 ShopEase. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>

      {/* Main Advertisement */}

      <section className="home-ad">
        <div className="ad-content">
          <p>LIMITED TIME OFFER</p>

          <h1>Big Shopping Sale</h1>

          <h2>Up to 50% OFF</h2>

          <p>
            Discover amazing products at exciting prices.
          </p>

          <Link to="/products">
            <button>Shop Now</button>
          </Link>
        </div>

        <div className="ad-side">
          <h2>50% OFF</h2>
          <p>Selected Products</p>
        </div>
      </section>


      {/* Advertisement Cards */}

      <section className="advertisement-section">

        <h2>Special Offers</h2>

        <div className="advertisement-container">

          <div className="advertisement-card">
            <span>SALE</span>
            <h2>Fashion Collection</h2>
            <p>Trending styles at amazing prices.</p>

            <Link to="/products">
              Shop Now →
            </Link>
          </div>

          <div className="advertisement-card">
            <span>NEW</span>
            <h2>Latest Electronics</h2>
            <p>Upgrade your gadgets today.</p>

            <Link to="/products">
              Explore Now →
            </Link>
          </div>

          <div className="advertisement-card">
            <span>DEAL</span>
            <h2>Daily Offers</h2>
            <p>Grab your favorite products before they sell out.</p>

            <Link to="/products">
              View Deals →
            </Link>
          </div>

        </div>

      </section>


      {/* Features */}

      <section className="features-section">

        <h2>Why Shop With Us?</h2>

        <div className="features">

          <div className="feature-card">
            <h3>🚚 Fast Delivery</h3>
            <p>Get your products delivered quickly.</p>
          </div>

          <div className="feature-card">
            <h3>🔒 Secure Payment</h3>
            <p>Your payments are safe and secure.</p>
          </div>

          <div className="feature-card">
            <h3>⭐ Quality Products</h3>
            <p>Shop from our collection of quality products.</p>
          </div>

          <div className="feature-card">
            <h3>💬 Customer Support</h3>
            <p>We are always ready to help you.</p>
          </div>

        </div>

      </section>


      {/* About */}

      <section className="home-about">

        <h2>Welcome to ShopEase</h2>

        <p>
          ShopEase is a simple and modern online shopping platform
          where you can discover products, explore categories and
          enjoy exciting offers.
        </p>

        <Link to="/products">
          <button>Start Shopping</button>
        </Link>

      </section>

    </div>
  );
}
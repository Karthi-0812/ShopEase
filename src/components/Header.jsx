import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const cart = useSelector((state) => state.cart);

  const menuRef = useRef();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show-menu");
  };

  return (
    <header className="header">
      <div className="nav-container">
        <Link to="/" className="logo">
          ShopEase
        </Link>

        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>

        <nav ref={menuRef} className="navbar">
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>

          <Link to="/products" onClick={toggleMenu}>
            Products
          </Link>

          <Link to="/categories" onClick={toggleMenu}>
            Categories
          </Link>

          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>

          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>

          <Link to="/cart" onClick={toggleMenu}>
            Cart 🛒
            <span className="cart-count">{totalItems}</span>
          </Link>

          <button className="theme-button" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </nav>
      </div>
    </header>
  );
}
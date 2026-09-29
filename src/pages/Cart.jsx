import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../slice/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-icon">🛒</div>

        <h1>Your Cart is Empty</h1>

        <p>
          Add some products to your cart and come back here.
        </p>

        <Link to="/products" className="dark-button">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-heading">
        <span>SHOPPING CART</span>
        <h1>Your Cart</h1>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.thumbnail}
                alt={item.title}
              />

              <div className="cart-item-info">
                <h3>{item.title}</h3>

                <p>
                  ₹{(item.price * 84).toFixed(0)}
                </p>

                <div className="quantity">
                  <button
                    onClick={() =>
                      dispatch(decreaseQuantity(item.id))
                    }
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      dispatch(increaseQuantity(item.id))
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="remove-button"
                onClick={() =>
                  dispatch(removeFromCart(item.id))
                }
              >
                Remove
              </button>
            </div>
          ))}

          <button
            className="clear-button"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>

          <p>
            Items <span>{totalItems}</span>
          </p>

          <p>
            Subtotal
            <span>₹{(total * 84).toFixed(0)}</span>
          </p>

          <p>
            Delivery <span>FREE</span>
          </p>

          <hr />

          <h2>
            Total
            <span>₹{(total * 84).toFixed(0)}</span>
          </h2>

          <Link to="/contact" className="checkout-button">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
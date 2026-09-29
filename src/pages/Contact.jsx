import React, { useReducer } from "react";
import {
  contactReducer,
  initialState,
} from "../reducer/contactReducer";

export default function Contact() {
  const [state, dispatch] = useReducer(
    contactReducer,
    initialState
  );

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE",
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!state.name.trim()) {
      errors.name = "Name is required";
    }

    if (!state.email.trim()) {
      errors.email = "Email is required";
    }

    if (!state.phone.trim()) {
      errors.phone = "Phone number is required";
    }

    if (!state.message.trim()) {
      errors.message = "Message is required";
    }

    if (Object.keys(errors).length > 0) {
      dispatch({
        type: "ERROR",
        errors: errors,
      });

      return;
    }

    dispatch({
      type: "SUBMIT",
    });
  };

  if (state.submitted) {
    return (
      <div className="success-container">
        <div className="success-icon">✓</div>

        <h1>Message Sent!</h1>

        <p>
          Thank you, {state.name}. We will contact you soon.
        </p>

        <button
          className="dark-button"
          onClick={() =>
            dispatch({
              type: "RESET",
            })
          }
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="contact-page">
      <div className="page-heading">
        <span>GET IN TOUCH</span>
        <h1>Contact Us</h1>

        <p>
          Have a question? We'd love to hear from you.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-info">
          <h2>Let's Talk</h2>

          <p>
            Contact our team for questions about products,
            orders or your shopping experience.
          </p>

          <div className="contact-detail">
            <strong>📧 Email</strong>
            <span>support@shopease.com</span>
          </div>

          <div className="contact-detail">
            <strong>📞 Phone</strong>
            <span>+91 98765 43210</span>
          </div>

          <div className="contact-detail">
            <strong>📍 Location</strong>
            <span>Chennai, Tamil Nadu</span>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label>Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={state.name}
              onChange={handleChange}
            />

            {state.errors.name && (
              <small>{state.errors.name}</small>
            )}
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={state.email}
              onChange={handleChange}
            />

            {state.errors.email && (
              <small>{state.errors.email}</small>
            )}
          </div>

          <div className="form-group">
            <label>Phone</label>

            <input
              type="text"
              name="phone"
              placeholder="Enter phone number"
              value={state.phone}
              onChange={handleChange}
            />

            {state.errors.phone && (
              <small>{state.errors.phone}</small>
            )}
          </div>

          <div className="form-group">
            <label>Message</label>

            <textarea
              name="message"
              placeholder="Enter your message"
              rows="5"
              value={state.message}
              onChange={handleChange}
            ></textarea>

            {state.errors.message && (
              <small>{state.errors.message}</small>
            )}
          </div>

          <button type="submit" className="dark-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
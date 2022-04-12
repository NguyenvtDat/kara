import React, { useState } from "react";
import "../../landing.css";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { applyMiddleware } from "redux";

function LandingPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const user = {
      email: formData.email,
      password: formData.password,
    };
    if (!JSON.parse(window.localStorage.getItem("users"))) {
      let users = [];
      users.push(user);
      window.localStorage.setItem("users", JSON.stringify(users));
    } else {
      let users = JSON.parse(window.localStorage.getItem("users"));
      const index = users.findIndex(
        (userStorage) => userStorage.email == user.email
      );
      if (index != -1) {
        alert("Already exist");
        return;
      }
      users.push(user);
      window.localStorage.setItem("users", JSON.stringify(users));
    }
    alert("Success");
    return;
  }
  return (
    <div className="login-page">
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            className="form--input"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type="password"
            placeholder="Password"
            className="form--input"
            name="password"
            onChange={handleChange}
            value={formData.password}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="form--input"
            name="confirmPassword"
            onChange={handleChange}
            value={formData.confirmPassword}
          />
          <button type="submit" className="form--submit">
            Sign Up
          </button>
          <Link to="/login" className="sign-up form--submit">
            Log In
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LandingPage;

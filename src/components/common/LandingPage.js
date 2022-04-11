import React, { useState } from "react";
import "../../landing.css";
import { useDispatch } from "react-redux";
import { Login } from "../../actions/auth";
import { useLocation, useNavigate } from "react-router-dom";
const userEmail = "abc@gmail.com";
const userPassword = "123456";

function LandingPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.email == userEmail && formData.password == userPassword) {
      const action = Login();
      dispatch(action);
      navigate(from, { replace: true });
      return;
    }
    console.log("Wrong password");
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
          <button className="form--submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default LandingPage;

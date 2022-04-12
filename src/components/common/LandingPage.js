import React, { useState } from "react";
import "../../landing.css";
import { useDispatch } from "react-redux";
import { Login } from "../../actions/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";

function LandingPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

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
    const verify = users.find((user) => user.email === formData.email);
    if (verify && formData.password == verify.password) {
      const action = Login();
      dispatch(action);
      navigate(from, { replace: true });
      return;
    }
    alert("Wrong password");
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
          <button type="submit" className="form--submit">
            Log In
          </button>
          <Link to="/signup" className="sign-up form--submit">
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LandingPage;

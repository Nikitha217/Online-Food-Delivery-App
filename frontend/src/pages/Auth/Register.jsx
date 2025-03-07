import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Register = ({ setUsername }) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!usernameInput || !password) {
      alert("Please enter a username and password.");
      return;
    }

    
    localStorage.setItem("username", usernameInput);
    localStorage.setItem("password", password);
    localStorage.setItem("isLoggedIn", true);

    if (setUsername) {
      setUsername(usernameInput);
    } else {
      console.error("setUsername is not passed as a prop.");
    }

    navigate("/menu"); 
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter username"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <span onClick={() => navigate("/login")}>Login here</span>
      </p>
    </div>
  );
};

export default Register;

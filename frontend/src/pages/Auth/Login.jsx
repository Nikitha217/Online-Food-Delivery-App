import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Login = ({ setUsername }) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (storedUsername === usernameInput && storedPassword === password && isLoggedIn) {
      if (setUsername) {
        setUsername(storedUsername);
      } else {
        console.error("setUsername is not passed as a prop.");
      }

      navigate("/menu"); 
    } else {
      alert("Invalid credentials! Please check your username and password.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <span onClick={() => navigate("/register")}>Register here</span>
      </p>
    </div>
  );
};

export default Login;

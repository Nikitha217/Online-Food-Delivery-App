import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  console.log("Landing Page Loaded"); 
  
  return (
    <div className="landing-container">
      <h1>Welcome to Our Food Delivery App</h1>
      <p>Delicious food delivered right to your doorstep.</p>
      <button
        onClick={() => {
          console.log("Navigating to /home"); 
          navigate("/home");
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default Landing;
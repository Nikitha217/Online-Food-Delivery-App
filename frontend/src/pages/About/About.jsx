import React from "react";
import "./About.css";
import foodImage from "../../assets/img/food_1.png";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
      <img src={foodImage} alt="Delicious Chicken Biryani" className="about-image" />
        <div className="about-text">
          <h2>About Us</h2>
          <h3>Why Choose Our Food Delivery Service?</h3>
          <p>
            Experience the best flavors from the comfort of your home! We bring
            you freshly prepared, high-quality meals right to your doorstep. Our
            specialty? The most delicious Chicken Biryani you'll ever taste!
          </p>
          <p>
            From local delicacies to international cuisine, we ensure each dish is
            made with love and delivered hot and fresh. Try our best-selling meals
            and enjoy an unforgettable dining experience at home.
          </p>
          <button className="learn-more">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
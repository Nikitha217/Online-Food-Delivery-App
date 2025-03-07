import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/navbar/logob.png";
import search_icon from "../../assets/navbar/search-w.png";
import basket_icon from "../../assets/navbar/basket_icon_b.png";

function Navbar({ cartItems }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const username = localStorage.getItem("username") || "Guest";

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/menu?search=${search.toLowerCase()}`);
      setSearch("");
    }
  };

  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleLoginClick = () => {
    navigate("/login");
    setShowProfileDropdown(false);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" onClick={() => navigate("/")} />

      <ul>
        <li onClick={() => navigate("/home")}>Home</li>
        <li onClick={() => navigate("/menu")}>Menu</li>
        <li onClick={() => navigate("/about")}>About Us</li>
        <li onClick={() => navigate("/reviews")}>Reviews</li>
      </ul>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        />
        <img src={search_icon} alt="Search" onClick={handleSearch} className="search-icon" />
      </div>

      <div className="navbar-search-icon" onClick={() => navigate("/cart")}>
        <img src={basket_icon} alt="Basket Icon" className="basket_icon" />
        {cartItems.length > 0 && <div className="cart-count">{cartItems.length}</div>}
      </div>

      <div className="profile-button" onClick={handleProfileClick} ref={dropdownRef}>
        <img
          src="https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783_960_720.png"
          alt="Profile"
          className="profile-icon"
        />
        {showProfileDropdown && (
          <div className="profile-dropdown">
            <p className="profile-greeting">Hello, {username}!</p>
            <div className="profile-content" onClick={handleLoginClick}>
              Login/Register
            </div>
            <button className="reset-button" onClick={() => navigate("/home")}>
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
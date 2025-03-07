import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Food from "./pages/Food/Food";
import About from "./pages/About/About";
import Reviews from "./pages/Reviews/Review";
import Cart from "./Components/Cart/Cart";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [username, setUsername] = useState(localStorage.getItem("username") || "Guest");

  const addToCart = (item) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((cartItem) => cartItem._id === item._id);

      if (existingItem) {
        return prevCartItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        return [...prevCartItems, item];
      }
    });
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems((prevCartItems) =>
      prevCartItems
        .map((item) =>
          item._id === itemToRemove._id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleLogout = () => {
    setUsername("Guest");
    localStorage.removeItem("username");
  };

  return (
    <Router>
      <MainApp
        cartItems={cartItems}
        username={username}
        onLogout={handleLogout}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        setUsername={setUsername}
      />
    </Router>
  );
}

const MainApp = ({ cartItems, username, onLogout, addToCart, removeFromCart, clearCart, setUsername }) => {
  const location = useLocation();
  const showNavbar = location.pathname !== "/"; 

  return (
    <>
      {showNavbar && <Navbar cartItems={cartItems} username={username} onLogout={onLogout} />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/foodlist/:category" element={<Food addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />}
        />
        <Route path="/login" element={<Login setUsername={setUsername} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
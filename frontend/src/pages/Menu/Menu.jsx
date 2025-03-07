import React from "react";
import { useNavigate,useLocation } from "react-router-dom";
import "./Menu.css";
import { motion } from "framer-motion";

const menuItems = [
  {
    name: "Biriyani",
    image: "https://images.pexels.com/photos/30748996/pexels-photo-30748996/free-photo-of-delicious-indian-biryani-with-aromatic-spices.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
  },
  {
    name: "Desserts",
    image: "https://images.pexels.com/photos/14056735/pexels-photo-14056735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4,
  },
  {
    name: "Pizza",
    image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5,
  },
  {
    name: "Sandwich",
    image: "https://images.pexels.com/photos/350343/pexels-photo-350343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4,
  },
  {
    name: "Parotta",
    image: "https://images.pexels.com/photos/10810650/pexels-photo-10810650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
  },
  {
    name: "Fried Rice",
    image: "https://images.pexels.com/photos/17910326/pexels-photo-17910326/free-photo-of-a-dish-with-rice-and-vegetables.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4,
  },
  {
    name: "Milkshake",
    image: "https://images.pexels.com/photos/3028139/pexels-photo-3028139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
  },
  {
    name: "Burger",
    image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4,
  },
  {
    name: "Noodles",
    image: "https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5,
  },
  
];

const renderStars = (rating) => {
  return [...Array(5)].map((_, i) => (
    <span key={i} className={i < rating ? "star" : "star-empty"}>
      {i < rating ? "★" : "☆"}
    </span>
  ));
};

function Menu() {
  const navigate = useNavigate();
  const search = new URLSearchParams(useLocation().search).get("search") || "";
  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg">
    <motion.div className="menu-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      {filteredItems.length > 0 ? (
        filteredItems.map((menu, index) => (
          <motion.div
            key={index}
            className="menu-card"
            onClick={() => navigate(`/foodlist/${menu.name.toLowerCase()}`)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={menu.image} alt={menu.name} />
            <p className="name">{menu.name}</p>
            <p className="ratings">{renderStars(menu.rating)}</p>
          </motion.div>
        ))
      ) : (
        <p className="no-results">No items found!</p>
      )}
    </motion.div>
  </div>
  );
}
export default Menu;

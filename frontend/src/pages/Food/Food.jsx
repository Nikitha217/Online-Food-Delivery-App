import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { food_list } from "../../Data/FoodList";
import "./Food.css";

function Food({ addToCart }) {
  const { category } = useParams();
  const filteredFood = food_list.filter(
    (food) => food.category.toLowerCase() === category.toLowerCase()
  );

  
  const [quantities, setQuantities] = useState({});

  
  const updateQuantity = (id, value) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(0, (prevQuantities[id] || 0) + value), 
    }));
  };

  return (
    <div className="food-container">
      <div className="food-list">
        {filteredFood.length > 0 ? (
          filteredFood.map((food) => (
            <div key={food._id} className="food-card">
              <img src={food.image} alt={food.name} />
              <div className="food-details">
                <h3>{food.name}</h3>
                <p>₹{food.price}</p>
              </div>
              <div className="quantity-selector">
                <button 
                  onClick={() => updateQuantity(food._id, -1)} 
                  disabled={(quantities[food._id] || 0) === 0}
                >
                  -
                </button>
                <span>{quantities[food._id] || 0}</span>
                <button onClick={() => updateQuantity(food._id, 1)}>+</button>
              </div>
              <button
                className="add-to-cart"
                onClick={() =>
                  addToCart({ ...food, quantity: quantities[food._id] || 0 })
                }
                disabled={(quantities[food._id] || 0) === 0} 
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No items found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default Food;
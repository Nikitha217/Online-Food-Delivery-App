import React, { useState } from "react";
import "./Cart.css";

function Cart({ cartItems, removeFromCart, clearCart }) {
  const [isPaid, setIsPaid] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty! Add some items before checking out.");
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      setIsPaid(true);
      setIsProcessing(false);
      clearCart(); 
    }, 2000);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>

      {isPaid ? (
        <div className="payment-success">
          <p>Payment successful! Thank you for your order.</p>
        </div>
      ) : cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item._id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item)}>
                  Remove One
                </button>
              </div>
            ))}
          </div>
          <h3>Total: ₹{totalPrice}</h3>
          <button className="checkout-btn" onClick={handleCheckout} disabled={isProcessing}>
            {isProcessing ? "Processing..." : "Checkout"}
          </button>
          <button className="clear-cart-btn" onClick={clearCart} disabled={isProcessing}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
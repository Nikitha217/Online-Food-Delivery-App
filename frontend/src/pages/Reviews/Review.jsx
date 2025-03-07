import React from "react";
import "./Review.css";

const reviews = [
  {
    name: "Murugan",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    rating: 4.5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consequatur fuga suscipit perspiciatis totam.",
  },
  {
    name: "Vishvadharshini",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 4.5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consequatur fuga suscipit perspiciatis totam.",
  },
  {
    name: "Sekar",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 4.5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consequatur fuga suscipit perspiciatis totam.",
  },
  {
    name: "Murugeswari",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
    rating: 4.5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consequatur fuga suscipit perspiciatis totam.",
  },
  {
    name: "Prakathi",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
    rating: 4.5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consequatur fuga suscipit perspiciatis totam.",
  },
  {
    name: "Nikitha",
    image: "https://randomuser.me/api/portraits/women/49.jpg",
    rating: 4.5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consequatur fuga suscipit perspiciatis totam.",
  }
];

const Reviews = () => {
  return (
    <div className="reviews-container">
      <h2>Customer's Reviews</h2>
      <div className="reviews">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <img src={review.image} alt={review.name} className="review-image" />
            <h3>{review.name}</h3>
            <p className="stars">⭐⭐⭐⭐⭐</p>
            <p className="review-text">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
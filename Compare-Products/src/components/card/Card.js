
import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";

function Card(props) {
  
  const navigate = useNavigate();

  const handleClick = (category) => {
    let route;
    // Determine the route based on the category
    switch (category) {
      case "skincare":
        route = "/skincare";
        break;
      case "haircare":
        route = "/haircare";
        break;
      case "bodycare":
        route = "/bodycare";
        break;
      default:
        route = "/";
    }
    // Navigate to the determined route
    navigate(route);
  };

  return (
    <div key={props.id} className="ProductCard">
      <img src={props.img} alt="image" className="ProductImage" onClick={() => handleClick(props.category)} />
      <h3 className="ProductName">{props.name}</h3>
      <div className="buttonPosition">
        {/* Pass the category as an argument to handleClick */}
        <button
          className="ProductButton"
          type="button"
          onClick={() => handleClick(props.category)}
        >
          Get In
        </button>
      </div>
    </div>
  );
}

export default Card;

// components/Snippet/ProductCard.js
import React from "react";
import "@fontsource/roboto-mono";
import { StyleRoot } from "radium";

const ProductCard = ({ image, name, description, price, onAddToCart }) => {
  return (
    <StyleRoot>
      <div style={cardStyle}>
        <div style={imageContainerStyle}>
          <img src={image} alt={name} style={imageStyle} />
        </div>
        <div style={textContainerStyle}>
          <div>
            <h3 style={nameStyle}>{name}</h3>
            <p style={descriptionStyle}>{description}</p>
          </div>
          <div>
            <p style={priceStyle}>₹{price}</p>
            <button style={buttonStyle} onClick={onAddToCart}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
};

// Styles
const cardStyle = {
  backgroundColor: "#fff",
  borderBottom: "1px solid #ddd",
  display: "flex",
  paddingBottom: "1rem",
  marginBottom: "1rem",
  "@media (max-width: 1130px)": {
    flexDirection: "column",
    alignItems: "center",
  },
};

const imageContainerStyle = {
  width: "25%",
  height: "auto",
  aspectRatio: 3 / 4,
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const textContainerStyle = {
  padding: "0 1rem 1rem 3rem",
  width: "75%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "@media (max-width: 1130px)": {
    padding: "1rem",
  },
  "@media (max-width: 640px)": {
    width: "100%",
  },
};

const nameStyle = {
  fontFamily: "Roboto Mono, monospace",
  fontSize: "1.2rem",
  fontWeight: "700",
};

const descriptionStyle = {
  fontFamily: "Roboto Mono, monospace",
  fontSize: "0.9rem",
  color: "#333",
};

const priceStyle = {
  fontFamily: "Roboto Mono, monospace",
  fontSize: "2rem",
  color: "#000",
  fontWeight: "700",
};

const buttonStyle = {
  fontFamily: "Roboto Mono, monospace",
  fontSize: "1rem",
  backgroundColor: "#000",
  color: "#fff",
  padding: "0.5rem 1rem",
  border: "none",
  cursor: "pointer",
};

export default ProductCard;

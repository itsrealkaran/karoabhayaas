// components/Snippet/ClassCard.js
import React from "react";
import "@fontsource/roboto-mono";
import { StyleRoot } from "radium";

const ClassCard = ({ image, title, description }) => {
  return (
    <StyleRoot>
      <div style={cardStyle}>
        <div style={imageContainerStyle}>
          <img src={image} alt={title} style={imageStyle} />
        </div>
        <div style={textContainerStyle}>
          <div>
            <h3 style={titleStyle}>{title}</h3>
            <p style={descriptionStyle}>{description}</p>
          </div>
          <div>
            <button style={buttonStyle}>PRACTICE</button>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
};

// Styles
const cardStyle = {
  backgroundColor: "#fff",
  borderBottom: "2px solid #ccc",
  display: "flex",
  paddingBottom: "1rem",
  marginBottom: "1rem",
  "@media (max-width: 1008px)": {
    flexDirection: "column",
  },
};

const imageContainerStyle = {
  width: "40%",
  aspectRatio: 16 / 9,
  "@media (max-width: 1008px)": {
    width: "100%",
  },
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const textContainerStyle = {
  padding: "0 1rem 1rem 3rem",
  width: "60%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "@media (max-width: 1008px)": {
    width: "100%",
    padding: "0",
  },
};

const titleStyle = {
  fontFamily: "Roboto Mono, monospace",
  fontSize: "1.2rem",
  fontWeight: "700",
};

const descriptionStyle = {
  fontFamily: "Roboto Mono, monospace",
  fontSize: "0.9rem",
  color: "#333",
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

export default ClassCard;

import React, { useState } from "react";
import "@fontsource/roboto-mono";
import { StyleRoot } from "radium";

const CartCard = ({
  name,
  price,
  date,
  orderCount,
  onDelete,
  onAdd,
  onSub,
}) => {
  const [count, setCount] = useState(orderCount);

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      onSub();
    }
  };

  const handleIncrement = () => {
    onAdd();
    setCount(count + 1);
  };

  return (
    <StyleRoot>
      <div style={cardStyle}>
        <div style={containerStyle}>
          <div style={leftBlockStyle}>
            <h3 style={titleStyle}>{name}</h3>
            <p style={modelStyle}>
              <strong>PRICE:</strong> ₹{price}
            </p>
            <p style={modelStyle}>
              <strong>DATE: </strong>
              {date}
            </p>
          </div>
          <div style={rightBlockStyle}>
            <div style={orderCountContainerStyle}>
              <button style={quantityButtonStyle} onClick={handleDecrement}>
                -
              </button>
              <span style={orderCountStyle}>{count}</span>
              <button style={quantityButtonStyle} onClick={handleIncrement}>
                +
              </button>
            </div>
            <button style={deleteButtonStyle} onClick={onDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
};

const cardStyle = {
  display: "flex",
  backgroundColor: "#fff",
  border: "2px solid #eee",
  display: "flex",
  padding: "1rem",
};

const containerStyle = {
  display: "flex",
  flex: 1,
  "@media (max-width: 560px)": {
    flexDirection: "column",
    // alignItems: 'flex-end',
    gap: "1rem",
  },
};

const leftBlockStyle = {
  display: "flex",
  flex: 4,
  flexDirection: "column",
};

const rightBlockStyle = {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  // alignItems: 'center',
  justifyContent: "center",
  "@media (max-width: 560px)": {
    alignItems: "normal",
    alignSelf: "flex-end",
  },
};

const titleStyle = {
  fontFamily: "Roboto Mono, monospace",
  fontSize: "1.2rem",
  fontWeight: "700",
  margin: "0",
};

const modelStyle = {
  fontFamily: "Roboto Mono, monospace",
  fontSize: "1rem",
  color: "#333",
  margin: "0",
};

const orderCountContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#000",
  marginBottom: "0.5rem",
};

const quantityButtonStyle = {
  fontFamily: "Roboto Mono, monospace",
  fontSize: "1rem",
  color: "#fff",
  backgroundColor: "#000",
  padding: "0.5rem 0.9rem",
  border: "none",
  cursor: "pointer",
};

const orderCountStyle = {
  fontFamily: "Roboto Mono, monospace",
  fontSize: "1rem",
  color: "#fff",
  margin: "0 0.5rem",
};

const deleteButtonStyle = {
  fontFamily: "Roboto Mono, monospace",
  fontSize: "1rem",
  backgroundColor: "#000",
  color: "#fff",
  padding: "0.5rem 1rem",
  border: "none",
  cursor: "pointer",
};

export default CartCard;

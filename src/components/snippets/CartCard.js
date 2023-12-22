import React, { useState } from 'react';
import "@fontsource/roboto-mono"; 

const CartCard = ({ name, price, date, orderCount, onDelete }) => {
  const [count, setCount] = useState(orderCount);

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div style={cardStyle}>
      <div style={containerStyle}>
        <div style={leftBlockStyle}>
          <h3 style={titleStyle}>{name}</h3>
          <p style={modelStyle}><strong>PRICE:</strong> ₹{price}</p>
          <p style={modelStyle}><strong>DATE: </strong>{date}</p>
        </div>
        <div style={rightBlockStyle}>
          <div style={orderCountContainerStyle}>
            <button style={quantityButtonStyle} onClick={handleDecrement}>-</button>
            <span style={orderCountStyle}>{count}</span>
            <button style={quantityButtonStyle} onClick={handleIncrement}>+</button>
          </div>
          <button style={deleteButtonStyle} onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  display: 'flex',
  backgroundColor: '#fff',
  border: '2px solid #eee',
  display: 'flex',
  padding: '1rem',
};

const containerStyle = {
  display: 'flex',
  flex: 1,
};

const leftBlockStyle = {
  display: 'flex',
  flex: 2,
  flexDirection: 'column',
}

const rightBlockStyle = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}

const titleStyle = {
  fontFamily: 'Roboto Mono, monospace',
  fontSize: '1.2rem',
  fontWeight: '700',
  margin: '0',
};

const modelStyle = {
  fontFamily: 'Roboto Mono, monospace',
  fontSize: '1rem',
  color: '#333',
  margin: '0',
};

const orderCountContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#000',
  marginBottom: '0.5rem',
};

const quantityButtonStyle = {
  fontFamily: 'Roboto Mono, monospace',
  fontSize: '1rem',
  color: '#fff',
  backgroundColor: '#000',
  padding: '0.5rem 0.9rem',
  border: 'none',
  cursor: 'pointer',
};

const orderCountStyle = {
  fontFamily: 'Roboto Mono, monospace',
  fontSize: '1rem',
  color: '#fff',
  margin: '0 0.5rem',
};

const deleteButtonStyle = {
  fontFamily: 'Roboto Mono, monospace',
  fontSize: '1rem',
  backgroundColor: '#000',
  color: '#fff',
  padding: '0.5rem 1rem',
  border: 'none',
  cursor: 'pointer',
};

export default CartCard;
// components/Home/TopStudentCard.js
import React from 'react';
import "@fontsource/roboto-mono"; 

const TopStudentCard = ({ image, name, quote }) => {
  return (
    <div style={cardStyle}>
      <img src={image} alt={name} style={imageStyle} />
      <div style={textContainerStyle}>
        <h3 style={nameStyle}>{name}</h3>
        <p style={quoteStyle}><i>"{quote}"</i></p>
      </div>
    </div>
  );
};

// Styles
const cardStyle = {
  minWidth: '320px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const textContainerStyle = {
  padding: '1rem',
  backgroundColor: '#f4f4f4',
  flexDirection: 'column',
  textAlign: 'left',
};

const nameStyle = {
  fontFamily: 'Roboto Mono, monospace',
  fontSize: '1rem',
  fontWeight: '700',
};

const quoteStyle = {
  fontFamily: 'Roboto Mono, monospace', // Fixed the font family
  fontSize: '0.9rem',
  fontStyle: 'italic',
  color: '#333',
};

export default TopStudentCard;

// components/Home/ReviewCard.js
import React from 'react';
import {StyleRoot} from 'radium';

const ReviewCard = ({ name, review }) => {
  return (
    <StyleRoot style={cardStyle}>
      <h3 style={nameStyle}>{name}</h3>
      <p style={reviewStyle}>{review}</p>
    </StyleRoot>
  );
};

// Styles
const cardStyle = {
  backgroundColor: '#f4f4f4',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  padding: '1.5rem',
  flex: '0 0 calc(30% - 3rem)', //for 3 reviews
  margin: '0 10px',
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  '@media (max-width: 1180px)': {
    flex: '0 0 calc(50% - 6rem)',
  },  
  '@media (max-width: 640px)': {
    flex: '0 0 70%',
  }
};

const nameStyle = {
  fontFamily: 'Roboto Mono, monospace',
  width: '100%',
  fontSize: '1rem',
  fontWeight: '700',
  borderBottom: '2px solid #999',
  margin: '0',
};

const reviewStyle = {
  fontFamily: 'Roboto Mono, monospace',
  fontSize: '0.9rem',
  color: '#333',
};

export default ReviewCard;

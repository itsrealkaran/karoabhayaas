// components/Home/ReviewCard.js
import React from 'react';

const ReviewCard = ({ name, review }) => {
  return (
    <div style={cardStyle}>
      <h3 style={nameStyle}>{name}</h3>
      <p style={reviewStyle}>{review}</p>
    </div>
  );
};

// Styles
const cardStyle = {
  backgroundColor: '#f4f4f4',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  padding: '1.5rem',
  flex: '0 0 calc(30% - 3rem)', /* Maximum 3 catalogs in one row with 1rem gap */
  //maxWidth: 'calc(30% - 3rem)', /* Maximum width for the catalogs */
  margin: '0 10px',
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
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

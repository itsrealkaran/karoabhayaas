// components/Home/ReviewContainer.js
import React from 'react';
import ReviewCard from './ReviewCard';

const ReviewContainer = () => {
  // Mock data for reviews (replace with your actual data)
  const reviewsData = [
    { id: 1, name: 'Student 1', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, name: 'Student 2', review: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, name: 'Student 3', review: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 4, name: 'Student 4', review: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    // Add more data as needed
  ];

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Reviews</h2>
      <div style={cardsContainerStyle}>
        {reviewsData.map(review => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  textAlign: 'center',
  margin: '2rem 2rem',
};

const headingStyle = {
  fontFamily: 'Roboto Mono, monospace',
  fontSize: '1.5rem',
  fontWeight: '100',
  marginBottom: '1rem',
};

const cardsContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  textAlign: 'left',
  justifyContent: 'space-evenly',
  gap: '1.5rem',
  overflowX: 'auto', // Enable horizontal scrolling if needed
  padding: '0 1rem',
};

export default ReviewContainer;

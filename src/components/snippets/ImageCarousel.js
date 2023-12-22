// components/Home/ImageCarousel.js
import React, { useState, useEffect } from 'react';

const ImageCarousel = () => {
  // Mock data for carousel images (replace with your actual data)
  const carouselImages = [
    'https://dthezntil550i.cloudfront.net/j7/latest/j72008051029109550000680902/4a4cab69-ba9e-42f9-a40a-9eee1183e57c.png',
    'https://s3.amazonaws.com/thumbnails.venngage.com/template/2a8626a4-c024-4231-8ac3-d9e97ef960ea.png',
    'https://e0.pxfuel.com/wallpapers/605/109/desktop-wallpaper-header-twitter-header-aesthetic-twitter-header-twitter-layouts.jpg',
    'https://i.pinimg.com/736x/1c/91/5d/1c915d62654e2d277506692a79da3233.jpg',
    // Add more image URLs as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Slideshow interval (change slide every 3 seconds)
    const slideshowInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(slideshowInterval); // Clear interval on component unmount
  }, [carouselImages]);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div style={carouselStyle}>
      {carouselImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Carousel Image ${index + 1}`}
          style={{ ...imageStyle, opacity: index === currentImageIndex ? 1 : 0 }}
        />
      ))}
      <div style={dotsContainerStyle}>
        {carouselImages.map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            style={{
              ...dotStyle,
              backgroundColor: index === currentImageIndex ? '#333' : '#ddd',
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

// Styles
const carouselStyle = {
  position: 'relative',
  margin: '2rem',
  overflow: 'hidden',
  paddingBottom: '33.33%', // 3:1 aspect ratio (change as needed)
};

const imageStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'opacity 0.5s ease-in-out',
};

const dotsContainerStyle = {
  position: 'absolute',
  bottom: '1rem',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
};

const dotStyle = {
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  backgroundColor: '#ddd',
  margin: '0 8px',
  cursor: 'pointer',
};

export default ImageCarousel;

// components/Home/Home.js
import React from 'react';
import ImageCarousel from '../snippets/ImageCarousel';
import TopStudentsContainer from '../snippets/TopStudentsContainer';
import ReviewContainer from '../snippets/ReviewContainer';
import Footer from '../Footer';

const Home = () => {
  return (
    <div style={homeContainerStyle}>
      <ImageCarousel />
      <TopStudentsContainer />
      <ReviewContainer />
      <Footer />
    </div>
  );
};

// Styles
const homeContainerStyle = {

};

export default Home;

// Main/Main.js
import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import Home from './screens/Home';
import Classes from './screens/Classes';
import Products from './screens/Products';
import AboutUs from './screens/AboutUs';
import LoginSignup from './screens/LoginSignup';
import Cart from './screens/Cart';

const Main = () => {
  const { selectedTab } = useContext(AppContext);

  const renderPage = () => {
    switch (selectedTab) {
      case 'home':
        return <Home />;
      case 'classes':
        return <Classes />;
      case 'products':
        return <Products />;
      case 'aboutUs':
        return <AboutUs />;
      case 'loginSignup':
        return <LoginSignup />;
      case 'cart':
        return <Cart />;
      default:
        return <Home />;
    }
  };

  return (
    <main>
      {renderPage()}
    </main>
  );
};

export default Main;



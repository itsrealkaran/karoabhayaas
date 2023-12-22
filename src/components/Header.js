import React, { useState, useContext } from 'react';
import "@fontsource/roboto-mono"; 
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { AppContext } from '../AppContext';
import { StyleRoot } from 'radium';

const Header = () => {
    const { onTabChange } = useContext(AppContext);
    const [showMenu, setShowMenu] = useState(false);

    const handleTabClick = (tab) => {
      onTabChange(tab);
      setShowMenu(false); // Hide dropdown when a tab is clicked
    };

    const handleMenuToggle = () => {
      setShowMenu(!showMenu);
    };
    
  return (
    <StyleRoot>
    <header style={headerStyle}>
      <div style={logoStyle} onClick={() => handleTabClick('home')}>Karo Abhyaash</div>
      <div style={{...navGroupStyle, ...smallScreen}}>
        <ul style={navStyle}>
          <li style={{...navItemStyle, position: 'relative'}} onClick={handleMenuToggle}>
            Menu
          {showMenu && (
            <div style={menuStyle}>
              <div style={menuItemStyle} onClick={() => handleTabClick('classes')}>Classes</div>
              <div style={menuItemStyle} onClick={() => handleTabClick('products')}>Product</div>
              <div style={menuItemStyle} onClick={() => handleTabClick('aboutUs')}>About Us</div>
            </div>
          )}</li>
          <li style={{...navItemStyle, ...iconStyle}} onClick={() => handleTabClick('loginSignup')}><FaUser /></li>
          <li style={{...navItemStyle, ...iconStyle}} onClick={() => handleTabClick('cart')}><FaShoppingCart /></li>
        </ul>
      </div>
      <div style={{navGroupStyle, ...bigScreen}}>
        <ul style={navStyle}>
          <li style={navItemStyle} onClick={() => handleTabClick('loginSignup')}><button style={buttonStyle}>JOIN US</button></li>
          <li style={navItemStyle} onClick={() => handleTabClick('classes')}>Classes</li>
          <li style={navItemStyle} onClick={() => handleTabClick('products')}>Products</li>
          <li style={navItemStyle} onClick={() => handleTabClick('aboutUs')}>About Us</li>
          <li style={{...navItemStyle, ...iconStyle}} onClick={() => handleTabClick('loginSignup')}><FaUser /></li>
          <li style={{...navItemStyle, ...iconStyle}} onClick={() => handleTabClick('cart')}><FaShoppingCart /></li>
        </ul>
      </div>
    </header>
    </StyleRoot>
  );
};

const headerStyle = {
  backgroundColor: '#fff',
  color: '#000',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontFamily: 'Roboto Mono',
  padding: '0 1rem 0 2rem',
  borderBottom: '2px solid #E5E5E5',
};

const logoStyle = {
  fontSize: '1.1rem',
  color: '#000',
  fontWeight: '700',
  cursor: 'pointer',
};

const smallScreen = {
  display: 'none',
  '@media (max-width: 740px)': {
    display: 'flex',
  }
};

const bigScreen = {
  display: 'flex',
  '@media (max-width: 740px)': {
    display: 'none',
  }
};

const menuStyle = {
  position: 'absolute',
  top: '100%',
  right: '-20%',
  backgroundColor: '#fff',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  zIndex: '1',
};

const menuItemStyle = {
  padding: '10px',
  borderBottom: '1px solid #E5E5E5',
  cursor: 'pointer',
};

const navGroupStyle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '1rem',
  fontWeight: '100',
};

const navStyle = {
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  marginRight: 'auto',
};

const navItemStyle = {
  marginRight: '25px',
  cursor: 'pointer',
  fontFamily: 'Roboto Mono, monospace',
};

const buttonStyle = {
  backgroundColor: '#000',
  color: '#fff',
  padding: '13px 20px',
  border: 'none',
  fontSize: '1rem',
  cursor: 'pointer',
};

const iconStyle = {
  fontSize: '1.2rem',
};

export default Header;
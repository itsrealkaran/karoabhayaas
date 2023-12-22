import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import CartCard from '../snippets/CartCard';

const Cart = () => {
  const { cart, removeFromCart, calculateTotal} = useContext(AppContext);
  const handleRemoveFromCart = (i) => {
    removeFromCart(i);
  };

  return (
    <div style={containerStyle}>
      <div style={topContainerStyle}>
        <p style={totalStyle}>TOTAL: ₹{calculateTotal()}</p>
        <button style={checkoutButtonStyle}>Checkout</button>
      </div>
      <div style={cardsContainerStyle}>
        {cart.map((item) => (
          <CartCard key={item.id} {...item} onDelete={() => handleRemoveFromCart(item.id)}/>
        ))}
      </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  margin: '2rem 4rem',
  border: '2px solid #eee',
};

const topContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 1rem',
  border: '2px solid #eee',
};

const totalStyle = {
  fontFamily: 'Roboto Mono, monospace',
  fontSize: '1.2rem',
  fontWeight: 'bold',
};

const checkoutButtonStyle = {
  fontFamily: 'Roboto Mono, monospace',
  fontSize: '1rem',
  backgroundColor: '#000',
  color: '#fff',
  padding: '0.5rem 1rem',
  border: 'none',
  cursor: 'pointer',
};

const cardsContainerStyle = {
  display: 'flex',
  padding: '2rem',
  height: '60vh',
  overflow: 'auto',
  flexDirection: 'column',
  gap: '1rem',
};

export default Cart;

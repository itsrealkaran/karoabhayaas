// components/screens/Products.js
import React, { useState, useContext } from 'react';
import ProductCard from '../snippets/ProductCard';
import { FaSearch, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import { AppContext } from '../../AppContext';

const Products = () => {
  const { addToCart } = useContext(AppContext);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending

  // Mock data for products (replace with your actual data)
  const productsData = [
    {
      id: 1,
      image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg',
      name: 'The Book of Art',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
      price: 1900,
    },
    {
      id: 2,
      image: 'https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg',
      name: 'Soul',
      description: 'Sed do eiusmod tempor incididunt Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchange ut labore et dolore magna aliqua.',
      price: 4999,
    },
    {
      id: 3,
      image: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
      name: 'My Book Cover',
      description: 'Ut enim ad minim veniam, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: 2000,
    },
    {
      id: 4,
      image: 'https://cdn.vox-cdn.com/thumbor/p-gGrwlaU4rLikEAgYhupMUhIJc=/0x0:1650x2475/1200x0/filters:focal(0x0:1650x2475):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13757614/817BsplxI9L.jpg',
      name: 'Normal People',
      description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: 3900,
    },
    // Add more product data as needed
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  const filteredAndSortedProducts = productsData
    .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price));

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div style={containerStyle}>
      <div style={searchBoxStyle}>
        <FaSearch style={iconStyle} />
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          style={inputStyle}
        />
        <button onClick={handleSort} style={sortButtonStyle}>
          {sortOrder === 'asc' ? <FaSortAmountDown /> : <FaSortAmountUp />}
        </button>
      </div>
      <div style={productsContainerStyle}>
        {filteredAndSortedProducts.map((product) => (
          <ProductCard key={product.id} {...product} onAddToCart={() => handleAddToCart(product)} />
        ))}
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  margin: '2rem 6rem',
};

const searchBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  backgroundColor: '#F6F6F6',
  padding: '1rem',
  marginBottom: '2rem',
};

const iconStyle = {
  fontSize: '1rem',
  marginRight: '1rem',
  padding: '0 0 0 1rem ',
  color: '#000',
};

const inputStyle = {
  fontFamily: 'Roboto Mono, monospace',
  fontSize: '1rem',
  padding: '0.5rem',
  backgroundColor: 'transparent',
  marginRight: '1rem',
  flex: 1,
  border: '1px solid transparent',
};

const sortButtonStyle = {
  fontSize: '1rem',
  padding: '0.5rem 1rem',
  color: '#000',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
};

const productsContainerStyle = {
  display: 'flex',
  margin: '2rem',
  flexDirection: 'column',
  gap: '1rem',
};

export default Products;

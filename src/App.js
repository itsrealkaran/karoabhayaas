// App.js
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import AppContextProvider from './AppContext';

const App = () => {
  return (
    <AppContextProvider>
      <Header />
      <Main />
    </AppContextProvider>
  );
};

export default App;

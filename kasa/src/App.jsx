import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router';
import Header from './Header/Header'
function App() {
  return (
    <>
      <Header />
      <AppRouter />

    </>
  );
}


export default App

import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Offers from './components/Offers';
import Services from './components/Services';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Nav />
      <Hero />
      <Offers />
      <Services />
    </div>
  );
}

export default App;
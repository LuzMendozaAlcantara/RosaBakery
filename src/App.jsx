import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Cart from './components/Cart';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Products />
      </main>
      
      <Contact />

      <Cart />
    </>
  );
}

export default App;

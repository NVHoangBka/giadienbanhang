import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './views/components/Header';
import CartController from './controllers/CartController';
import Footer from './views/components/Footer';
import AppRouter from './routers';


const App = () => {
  const cartController = new CartController();
  const [cartItems, setCartItems] = useState(cartController.getCartItems());

  const addToCart = (product) => {
    const updatedCart = cartController.addToCart(product);
    setCartItems(updatedCart);
  };

  const removeFromCart = (index) => {
    const updatedCart = cartController.removeFromCart(index);
    setCartItems(updatedCart);
  };

  return (
    <Router>
      <Header cartItems={cartItems} />
      <div className="">
        <AppRouter
          addToCart={addToCart}
          cartItems={cartItems}
          removeFromCart={removeFromCart}
        />
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
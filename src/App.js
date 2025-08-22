import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './views/components/Header';
import ProductCard from './views/ProductCard';
import ProductDetail from './views/ProductDetail';
import Home from './views/Home'
import Cart from './views/Cart';
import ProductModel from './models/ProductModel';
import CartController from './controllers/CartController';
import Footer from './views/components/Footer';

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
        <Routes>
          <Route 
            path="/" 
            element={<div><Home/></div>}
          />
          <Route
            path="/product/:id"
            element={<ProductDetail addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
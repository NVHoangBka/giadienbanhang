import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthRouter from './AuthRouter';
import ProductRouter from './ProductRouter';
import CartRouter from './CartRouter';
import Home from '../views/Home';

const AppRouter = ({ isAuthenticated, cartItems, addToCart, removeFromCart, onLogin }) => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* Auth */}
      <Route path="/account/*" element={<AuthRouter isAuthenticated={isAuthenticated} onLogin={onLogin} />} />

      {/* Product */}
      <Route path="/products/*" element={<ProductRouter isAuthenticated={isAuthenticated} addToCart={addToCart} />} />

      {/* Cart */}
      <Route
        path="/cart/*"
        element={<CartRouter isAuthenticated={isAuthenticated} cartItems={cartItems} removeFromCart={removeFromCart} />}
      />

      {/* fallback */}
      <Route path="*" element={<Navigate to="/account/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
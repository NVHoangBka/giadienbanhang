import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthRouter from './AuthRouter';
import ProductRouter from './ProductRouter';
import CartRouter from './CartRouter';

const AppRouter = ({ isAuthenticated, cartItems, addToCart, removeFromCart, onLogin }) => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/login" />} />
      <AuthRouter isAuthenticated={isAuthenticated} onLogin={onLogin} />
      <ProductRouter isAuthenticated={isAuthenticated} addToCart={addToCart} />
      <CartRouter
        isAuthenticated={isAuthenticated}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
    </Routes>
  );
};

export default AppRouter;
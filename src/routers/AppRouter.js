import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthRouter from './AuthRouter';
import ProductRouter from './ProductRouter';
import CartRouter from './CartRouter';
import Home from '../views/Home';
import ProductController from '../controllers/ProductController'; // Giả định export instance

const AppRouter = ({ isAuthenticated, cartItems, addToCart, removeFromCart, onLogin, onCartChange }) => {
  // Xác định route fallback dựa trên trạng thái đăng nhập
  const getFallbackRoute = () => {
    return isAuthenticated ? '/' : '/account/login';
  };

  return (
    <Routes>
      <Route 
        path="/" 
        element={<Home addToCart={addToCart} />} 
      />
      {/* Auth */}
      <Route 
        path="/account/*" 
        element={<AuthRouter isAuthenticated={isAuthenticated} onLogin={onLogin} />} 
      />

      {/* Product */}
      <Route 
        path="/products/*" 
        element={<ProductRouter isAuthenticated={isAuthenticated} addToCart={addToCart} productController={ProductController} />} 
      />

      {/* Cart */}
      <Route
        path="/cart/*"
        element={<CartRouter isAuthenticated={isAuthenticated} cartItems={cartItems} removeFromCart={removeFromCart} onCartChange={onCartChange} />}
      />

      {/* Fallback */}
      <Route 
        path="*" 
        element={<Navigate to={getFallbackRoute()} replace />} 
      />
    </Routes>
  );
};

export default AppRouter;
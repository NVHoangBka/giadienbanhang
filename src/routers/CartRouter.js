import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Cart from '../views/Cart';
import CartController from '../controllers/CartController';

const CartRouter = ({ isAuthenticated, cartItems, removeFromCart }) => {
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <Route
      path="/cart"
      element={
        <ProtectedRoute>
          <Cart 
            cartItems={cartItems} 
            removeFromCart={removeFromCart} 
            cartController={CartController} 
          />
        </ProtectedRoute>
      }
    />
  );
};

export default CartRouter;
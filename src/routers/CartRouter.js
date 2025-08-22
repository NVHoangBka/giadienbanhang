import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Cart from '../views/Cart';

const CartRouter = ({ isAuthenticated, cartItems, removeFromCart }) => {
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <Route
      path="/cart"
      element={
        <ProtectedRoute>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </ProtectedRoute>
      }
    />
  );
};

export default CartRouter;  
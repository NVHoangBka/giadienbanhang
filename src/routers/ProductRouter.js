import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import ProductDetail from '../views/ProductDetail';
import Product from '../views/Product';

const ProductRouter = ({ isAuthenticated, addToCart }) => {
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <Routes>
      <Route  
        path="/all"
        element={
          // <ProtectedRoute>
            <Product addToCart={addToCart} path='all'></Product>
          // </ProtectedRoute>
        }
      />
      <Route  
        path="/thuc-pham-tuoi-song"
        element={
          // <ProtectedRoute>
            <Product addToCart={addToCart} path='thuc-pham-tuoi-song'></Product>
          // </ProtectedRoute>
        }
      />
      <Route
        path="/product/:id"
        element={
          <ProtectedRoute>
            <ProductDetail addToCart={addToCart} />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default ProductRouter;
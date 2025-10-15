import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import ProductCard from '../views/ProductCard';
import ProductDetail from '../views/ProductDetail';
import ProductModel from '../models/ProductModel';
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
            <Product path='all'></Product>
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
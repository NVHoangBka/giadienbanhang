import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ProductDetail from '../views/ProductDetail';
import Product from '../views/Product';
import ProductController from '../controllers/ProductController';

const ProductRouter = ({ isAuthenticated, addToCart }) => {
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  const paths = ['all', ...ProductController.getAllProducts().map(p => p.titles[0])]; 

  return (
    <Routes>
      {paths.map((path) => (
        <Route
          key={path}
          path={`/${path}/:subTitlePath?`}
          element={<Product addToCart={addToCart} path={path} productController={ProductController} />}
        />
      ))}

      <Route
        path="/product/:id"
        element={
          <ProtectedRoute>
            <ProductDetail addToCart={addToCart} productController={ProductController} />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default ProductRouter;
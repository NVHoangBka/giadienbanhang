import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import ProductCard from '../views/ProductCard';
import ProductDetail from '../views/ProductDetail';
import ProductModel from '../models/ProductModel';

const ProductRouter = ({ isAuthenticated, addToCart }) => {
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <>
      <Route  
        path="/all"
        element={
          <ProtectedRoute>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {ProductModel.getAllProducts().map((product) => (
                <div key={product.id} className="col">
                  <ProductCard product={product} addToCart={addToCart} />
                </div>
              ))}
            </div>
          </ProtectedRoute>
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
    </>
  );
};

export default ProductRouter;
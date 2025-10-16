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
            <Product addToCart={addToCart} path='all'></Product>
        }
      />
      <Route  
        path="/cham-soc-gia-dinh"
        element={
            <Product addToCart={addToCart} path='cham-soc-gia-dinh'></Product>
        }
      />
      <Route  
        path="/do-dung-me-be"
        element={
            <Product addToCart={addToCart} path='do-dung-me-be'></Product>
        }
      />
      <Route  
        path="/thuc-pham-tuoi-song"
        element={
            <Product addToCart={addToCart} path='thuc-pham-tuoi-song'></Product>
        }
      />
      <Route  
        path="/thuc-pham-kho"
        element={
            <Product addToCart={addToCart} path='thuc-pham-kho'></Product>
        }
      />
      <Route  
        path="/do-dung-nha-bep"
        element={
            <Product addToCart={addToCart} path='do-dung-nha-bep'></Product>
        }
      />
      <Route  
        path="/sua-cac-loai"
        element={
            <Product addToCart={addToCart} path='sua-cac-loai'></Product>
        }
      />
      <Route  
        path="/van-phong-pham"
        element={
            <Product addToCart={addToCart} path='van-phong-pham'></Product>
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
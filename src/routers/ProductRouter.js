import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import ProductDetail from '../views/ProductDetail';
import Product from '../views/Product';
import TitleModel from '../models/TitleModel';

const ProductRouter = ({ isAuthenticated, addToCart }) => {
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  // Lấy danh mục từ model mà không sửa đổi mảng gốc
  const titles = [...TitleModel.getAllTitles()];

  // Thêm route 'all' vào đầu danh sách
  const paths = ['all', ...titles.map(t => t.path)];

  return (
     <Routes>
      {/* Tạo route động dựa trên danh sách paths */}
      {paths.map((path) => (
        <Route
          key={path}
          path={`/${path}/*`}
          element={<Product addToCart={addToCart} path={path} />}
        />
      ))}

      {/* Route chi tiết sản phẩm cần đăng nhập */}
      <Route
        path="/product/:id"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ProductDetail addToCart={addToCart} />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default ProductRouter;
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../views/layout/Auth/Login';
import Register from '../views/layout/Auth/Register';
import AuthController from '../controllers/AuthController'; // Sử dụng instance

const AuthRouter = ({ isAuthenticated, onLogin }) => {
  return (
    <Routes>
      <Route 
        path="/login" 
        element={<Login onLogin={onLogin} authController={AuthController} />} 
      />
      <Route 
        path="/register" 
        element={<Register onLogin={onLogin} authController={AuthController} />} 
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AuthRouter;
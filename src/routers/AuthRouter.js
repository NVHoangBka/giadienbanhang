import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../views/layout/Auth/Login';
import Register from '../views/layout/Auth/Register';
import Account from '../views/layout/Auth/Account'
import AuthController from '../controllers/AuthController';

const AuthRouter = ({ isAuthenticated, onLogin }) => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={<Account onLogin={onLogin} authController={AuthController}/>} 
      />
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
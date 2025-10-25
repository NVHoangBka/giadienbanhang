import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../views/layout/Auth/Login';
import Register from '../views/layout/Auth/Register';
import Account from '../views/layout/Auth/Account/Account'

const AuthRouter = ({ isAuthenticated, onLogin, authController}) => {
  return (
    <Routes>
      <Route 
        path="/*" 
        element={<Account onLogin={onLogin} authController={authController}/>} 
      />
      <Route 
        path="/login" 
        element={<Login onLogin={onLogin} authController={authController} />} 
      />
      <Route 
        path="/register" 
        element={<Register onLogin={onLogin} authController={authController} />} 
      />
    </Routes>
  );
};

export default AuthRouter;
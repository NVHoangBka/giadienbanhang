import React from 'react';
import {Routes, Route, Navigate } from 'react-router-dom';
import Login from '../views/layout/Auth/Login';
import Register from '../views/layout/Auth/Register';

const AuthRouter = ({ isAuthenticated, onLogin }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login onLogin={onLogin} />} />
      <Route path="/register" element={<Register />} />
      {/* fallback */}
      <Route path="*" element={<Navigate to="login" replace />} />
    </Routes>
  );
};

export default AuthRouter;
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Login from '../views/Login';

const AuthRouter = ({ isAuthenticated, onLogin }) => {
  return (
    <Route
      path="/login"
      element={
        isAuthenticated ? (
          <Navigate to="/" />
        ) : (
          <Login onLogin={onLogin} />
        )
      }
    />
  );
};

export default AuthRouter;
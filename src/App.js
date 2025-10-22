import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './views/components/Header';
import CartController from './controllers/CartController';
import Footer from './views/components/Footer';
import AppRouter from './routers/AppRouter';
import ToastMessage from './views/components/ToastMessage';
import AuthController from './controllers/AuthController';

const App = () => {
  const cartController = CartController;
  const authController = AuthController;
  const [cartItems, setCartItems] = useState(cartController.getCartItems());
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('info');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      const user = await authController.getCurrentUser();
      console.log('Kiểm tra isAuthenticated khi khởi động:', !!user);
      setIsAuthenticated(!!user);
      const storedCart = cartController.getCartItems();
      if (storedCart.length > 0 && JSON.stringify(storedCart) !== JSON.stringify(cartItems)) {
        setCartItems(storedCart);
      }
    }
    checkAuth();
  }, [authController, cartController]);

  const addToCart = (product) => {
    try {
      const updatedCart = cartController.addToCart(product);
      setCartItems([...updatedCart]);
      setToastMessage(`Đã thêm "${product.name}" vào giỏ hàng`);
      setToastType('success');
      setShowToast(true);
    } catch (error) {
      setToastMessage(error.message);
      setToastType('danger');
      setShowToast(true);
    }
  };

  const removeFromCart = (productId) => {
    try {
      const updatedCart = cartController.removeFromCart(productId);
      setCartItems([...updatedCart]);
    } catch (error) {
      setToastMessage(error.message);
      setToastType('danger');
      setShowToast(true);
    }
  };

  const onLogin = async (email, password) => {
    const result = await authController.login(email, password);
    console.log('onLogin result:', result);
    if (result.success) {
      setIsAuthenticated(true);
      return true;
    } else {
      setIsAuthenticated(false);
      return false;
    }
  };

  const onLogout = async () => {
    await authController.logout();
    setIsAuthenticated(false);
  };

  const onCartChange = (updatedCart) => {
    setCartItems([...updatedCart]);
  };

  return (
    <Router>
      <Header
        cartController={cartController}
        isAuthenticated={isAuthenticated}
        onLogout={onLogout}
        cartItems={cartItems}
        onCartChange={onCartChange}
      />
      <div className="">
        <AppRouter
          isAuthenticated={isAuthenticated}
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          onLogin={onLogin}
          onCartChange={onCartChange}
        />
      </div>
      <Footer />
      <div className="toast-container position-fixed bottom-0 top-0 end-0">
        <ToastMessage
          show={showToast}
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      </div>
    </Router>
  );
};

export default App;
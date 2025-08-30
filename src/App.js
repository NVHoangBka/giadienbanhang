import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './views/components/Header';
import CartController from './controllers/CartController';
import Footer from './views/components/Footer';
import AppRouter from './routers';
import ToastMessage from "./views/components/ToastMessage";


const App = () => {
  const cartController = new CartController();
  const [cartItems, setCartItems] = useState(cartController.getCartItems());
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const addToCart = (product) => {
    const updatedCart = cartController.addToCart(product);
    setCartItems(updatedCart);
    setToastMessage(`Đã thêm "${product.name}" vào giỏ hàng`);
    setShowToast(true);
  };

  const removeFromCart = (index) => {
    const updatedCart = cartController.removeFromCart(index);
    setCartItems(updatedCart);
  };

  

  return (
    <Router>
      <Header cartItems={cartItems} />
      <div className="">
        <AppRouter
          addToCart={addToCart}
          cartItems={cartItems}
          removeFromCart={removeFromCart}
        />
      </div>
      <Footer/>

      {/* Toast hiển thị ở góc màn hình */}
      <ToastMessage
        show={showToast}
        message={toastMessage}
        onClose={() => setShowToast(false)}
      />
    </Router>
  );
};

export default App;
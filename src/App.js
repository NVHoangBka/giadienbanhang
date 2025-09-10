import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './views/components/Header';
import CartController from './controllers/CartController';
import Footer from './views/components/Footer';
import AppRouter from './routers';
import ToastMessage from "./views/components/ToastMessage";

  const cartController = new CartController();
  
const App = () => {
  const [cartItems, setCartItems] = useState(cartController.getCartItems());
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("info");


  const addToCart = (product) => {
    const updatedCart = cartController.addToCart(product);
    setCartItems([...updatedCart]);
    setToastMessage(`Đã thêm "${product.name}" vào giỏ hàng`);
    setToastType("success");
    setShowToast(true);
  };

  const removeFromCart = (index) => {
    const updatedCart = cartController.removeFromCart(index);
    setCartItems(updatedCart);
  };

  

  return (
    <Router>
      <Header cartController={cartController}/>
      <div className="">
        <AppRouter
          addToCart={addToCart}
          cartItems={cartItems}
          removeFromCart={removeFromCart}
        />
      </div>
      <Footer/>

      <div className="toast-container position-fixed bottom-0 top-0 end-0">
        {/* Toast hiển thị ở góc màn hình */}
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
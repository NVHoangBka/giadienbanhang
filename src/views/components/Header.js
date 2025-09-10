
import React, { useRef, useState } from 'react';

import { Link, useNavigate } from "react-router-dom";
import AuthController from '../../controllers/AuthController';
import Menu from './Menu';
import Search from './Search';
import Cart from '../Cart';

const Header = ({cartController }) => {
  const navigate = useNavigate();
  const authController = new AuthController();
  const user = authController.getCurrentUser();
  const handleClickHome = () => {
    navigate("/");
  };
  const handleClickLogin = () => {
    navigate("/account/login");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const menuRef = useRef(null);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  
  const [cartItems, setCartItems] = useState(cartController.getCartItems());
   const totalQuantity = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);
    

  return (
    <header class="header">
      <div class="header-top">
        <div className="container d-flex justify-content-between align-items-center">
          <div class="header-top-left d-flex align-items-center" onClick={toggleMenu}>
            <button className="btn btn-outline-secondary border rounded-circle">
              <i class="bi bi-list fs-5 "></i>
            </button>
            <span class="header-top-left-text ms-1">Danh mục sản phẩm</span>
          </div>
          <Menu
            isOpen={isMenuOpen}
            menuRef={menuRef}
            setIsMenuOpen={setIsMenuOpen}
          />
          {isMenuOpen && (
            <div
              className="modal-backdrop fade show"
              onClick={() => setIsMenuOpen(false)}
            ></div>
          )}
          <div class="header-top-center text-center" onClick={handleClickHome} style={{ background: 'transparent' }}>
            <img src="https://www.canva.com/design/DAGwwkhPGJ4/TrjwaRAGmJSgLHZRKbYLGg/view" alt="logo" class="header-logo h-75 w-50" />
          </div>
          <div class="header-top-right">
            <button className="btn btn-outline-secondary border rounded-circle m-3" onClick={toggleSearch}>
              <i class="bi bi-search fs-5"></i>
            </button>
            <Search
              isOpen={isSearchOpen}
              // SearchRef={SearchRef}
              setIsSearchOpen={setIsSearchOpen}
            />
            {isSearchOpen && (
              <div
                className="modal-backdrop fade show"
                onClick={() => setIsSearchOpen(false)}
              ></div>
            )}
            <button
              className="btn btn-outline-secondary border rounded-circle m-3"
              onClick={handleClickLogin}
            >
              <i className="bi bi-person fs-5"></i>
            </button>
            <button className="btn btn-outline-secondary border m-3 position-relative" onClick={toggleCart}>
              <i className="bi bi-cart4 fs-5 "></i>
              <span className="ms-1">Giỏ hàng</span>
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "0.6rem" }}
              >{totalQuantity}
              </span>
            </button>
            <Cart
              isOpen={isCartOpen}
              setIsCartOpen={setIsCartOpen}
              cartItems={cartItems}
              cartController={cartController}
              onCartChange={(updatedCart) => setCartItems(updatedCart)}
            />
            {isCartOpen && (
              <div
                className="modal-backdrop fade show"
                onClick={() => setIsCartOpen(false)}
              ></div>
            )}
          
          </div>
        </div>
      </div>
      <div class="header-bottom bg-success">
        <div className="container">
          <ul className="navbar justify-content-center list-unstyled row ms-5 me-5 p-3 text-white mb-0">
            <li className="nav-item hover col-2 text-center">
              <a href="#" className="nav-link">
                Giới thiệu
              </a>
            </li>
            <li className="nav-item hover col-2 text-center">
              <a href="#" className="nav-link">
                Khuyến mãi
              </a>
            </li>
            <li className="nav-item  hover col-2 text-center">
              <a href="#" className="nav-link">
                Tin tức
              </a>
            </li>
            <li className="nav-item hover col-2 text-center">
              <a href="#" className="nav-link">
                Kiểm tra đơn hàng
              </a>
            </li>
            <li className="nav-item hover col-2 text-center">
              <a href="#" className="nav-link">
                Liên hệ
              </a>
            </li>
            <li className="nav-item hover col-2 text-center">
              <a href="#" className="nav-link">
                Hướng dẫn thiết lập
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

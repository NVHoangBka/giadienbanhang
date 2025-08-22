import React from 'react';

const Menu = ({ isOpen, menuRef, setIsMenuOpen }) => {
  // Đóng menu khi chọn một mục
  const handleItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav ref={menuRef} className={`menu ${isOpen ? 'active' : ''}`}>
      <div className='menu-header d-flex pt-4 flex justify-content-between pb-3 px-4'>
        <a className='header-icon-group text-reset d-flex text-decoration-none'>
          <div className='header-icon align-content-center me-2'>
             <i className="bi bi-person fs-3 border px-1"></i>
          </div>
          <div>
            <p className='mb-1 fs-6'>Tài khoản</p>
            <span className='fw-bold fs-6'>Đăng nhập</span>
          </div>
        </a>
        <button className='btn '>X</button>
      </div>
      <ul className="dropdown-menu show">
        <li className="dropdown-submenu">
          <a href="#" onClick={handleItemClick}>Menu 1</a>
          <ul className="dropdown-menu">
            <li><a href="#" onClick={handleItemClick}>Submenu 1-1</a></li>
            <li><a href="#" onClick={handleItemClick}>Submenu 1-2</a></li>
            <li className="dropdown-submenu">
              <a href="#">Submenu 1-3</a>
              <ul className="dropdown-menu">
                <li><a href="#" onClick={handleItemClick}>Submenu 1-3-1</a></li>
                <li><a href="#" onClick={handleItemClick}>Submenu 1-3-2</a></li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="dropdown-submenu">
          <a href="#">Menu 2</a>
          <ul className="dropdown-menu">
            <li><a href="#" onClick={handleItemClick}>Submenu 2-1</a></li>
            <li><a href="#" onClick={handleItemClick}>Submenu 2-2</a></li>
          </ul>
        </li>

        <li>
          <a href="#" onClick={handleItemClick}>Menu 3</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

import React from 'react';

const Menu = ({ isOpen, menuRef, setIsMenuOpen }) => {
  const handleItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav ref={menuRef} className={`menu ${isOpen ? 'active' : ''}`}>
      <div className='menu-header d-flex flex justify-content-between py-3 px-4 align-items-center'>
        <a className='header-icon-group text-reset d-flex text-decoration-none py-1 px-2 menu-hover'>
          <div className='header-icon align-content-center me-2'>
             <i className="bi bi-person fs-3 border px-1"></i>
          </div>
          <div className='lh-sm'>
            <p className='mb-1 fs-6'>Tài khoản</p>
            <span className='fw-bold fs-6'>Đăng nhập</span>
          </div>
        </a>
        <button className='btn border rounded-circle px-1 py-0 h-50 ' onClick={() => setIsMenuOpen(false)}><i className="bi bi-x fs-4"></i></button>
      </div>
      <ul className="dropdown-menu show">
        <li>
          <a href="/products/all" onClick={handleItemClick} className='menu-hover'>Tất cả sản phẩm</a>
        </li>
        <li className="dropdown-submenu">
          <a href="/products/thuc-pham-tuoi-song" title='Thực phẩm tươi sống' className='d-flex justify-content-between menu-hover'>
            <span>Thực phẩm tươi sống</span>
            <i class="bi bi-caret-right-fill d-flex algin-items-center"></i>
          </a>
          <ul className="dropdown-menu">
            <li><a href="#" onClick={handleItemClick}>Rau củ</a></li>
            <li><a href="#" onClick={handleItemClick}>Hoa quả</a></li>
            <li><a href="#" onClick={handleItemClick}>Thịt các loại</a></li>
            <li><a href="#" onClick={handleItemClick}>Thủy hải sản</a></li>
          </ul>
        </li>
        <li className="dropdown-submenu">
          <a href="/products/thuc-pham-tuoi-song" title='Thực phẩm tươi sống' className='d-flex justify-content-between menu-hover'>
            <span>Thực phẩm tươi sống</span>
            <i class="bi bi-caret-right-fill d-flex algin-items-center"></i>
          </a>
          <ul className="dropdown-menu">
            <li><a href="#" onClick={handleItemClick}>Rau củ</a></li>
            <li><a href="#" onClick={handleItemClick}>Hoa quả</a></li>
            <li><a href="#" onClick={handleItemClick}>Thịt các loại</a></li>
            <li><a href="#" onClick={handleItemClick}>Thủy hải sản</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

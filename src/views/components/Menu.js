import React from 'react';

const Menu = ({ isOpen, menuRef, setIsMenuOpen }) => {
  const handleItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav ref={menuRef} className={`menu ${isOpen ? 'active' : ''}`}>
      <div className='menu-container'>

        <div className='menu-header   d-flex flex justify-content-between py-3 px-4 align-items-center'>
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
        <div className='menu-conten'>
          <ul className="menu-list">
            <li>
              <a href="/products/all" onClick={handleItemClick} className='menu-hover'>Tất cả sản phẩm</a>
            </li>
            <li className="dropdown-submenu">
              <a href="/products/thuc-pham-tuoi-song" title='Thực phẩm tươi sống' className='d-flex justify-content-between menu-hover'>
                <span>Thực phẩm tươi sống</span>
                <i class="bi bi-caret-right-fill d-flex align-items-center"></i>
              </a>
              <ul className="menu-list">
                <li className='menu-hover'><a href="#" onClick={handleItemClick}>Rau củ</a></li>
                <li className='menu-hover'><a href="#" onClick={handleItemClick}>Hoa quả</a></li>
                <li className='menu-hover'><a href="#" onClick={handleItemClick}>Thịt các loại</a></li>
                <li className='menu-hover'><a href="#" onClick={handleItemClick}>Thủy hải sản</a></li>
              </ul>
            </li>
          </ul>
          <ul className="menu-list">
            <li>
              <a href="#" onClick={handleItemClick} className='menu-hover'>Giới thiệu</a>
            </li>
            <li className="dropdown-submenu">
              <a href="#" title='Thực phẩm tươi sống' className='d-flex justify-content-between menu-hover'>
                <span>Khuyến mãi</span>
                <i class="bi bi-caret-right-fill d-flex align-items-center"></i>
              </a>
              <ul className="menu-list">
                <li className='menu-hover'><a href="#" onClick={handleItemClick}>Flash Sale 1 khung giờ</a></li>
                <li className='menu-hover'><a href="#" onClick={handleItemClick}>Flash Sale nhiều khung giờ</a></li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={handleItemClick} className='menu-hover'>Tin tức</a>
            </li>
            <li>
              <a href="#" onClick={handleItemClick} className='menu-hover'>Kiểm tra đơn hàng</a>
            </li>
            <li>
              <a href="#" onClick={handleItemClick} className='menu-hover'>Liên hệ</a>
            </li>
          </ul>
        </div>
        <div className='menu-footer row mx-0 border-top pt-2'>
            <div className='col-6 py-4 menu-hover'>
                <i className="bi bi-shop border p-2"></i>
                <span className='ps-2'>Hệ thống cửa hàng</span>
            </div>
            <div className='col-6 py-4 menu-hover'>
                <i className="bi bi-telephone-outbound border p-2"></i>
                <span className='ps-2'>Holine: 0999999998</span>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;

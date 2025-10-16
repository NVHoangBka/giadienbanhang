import React from 'react';
import { Link } from 'react-router-dom';
import TitleModel from '../../models/TitleModel';

const Menu = ({ isOpen, menuRef, setIsMenuOpen }) => {
  const handleItemClick = () => {
    setIsMenuOpen(false);
  };

  // Lấy tất cả titles từ TitleModel
  const titles = TitleModel.getAllTitles();

  return (
    <nav ref={menuRef} className={`menu ${isOpen ? 'active' : ''}`}>
      <div className='menu-container'>

        <div className='menu-header   d-flex flex justify-content-between py-3 px-4 align-items-center'>
          <Link className='header-icon-group text-reset d-flex text-decoration-none py-1 px-2 menu-hover'>
            <div className='header-icon align-content-center me-2'>
              <i className="bi bi-person fs-3 border px-1"></i>
            </div>
            <div className='lh-sm'>
              <p className='mb-1 fs-6'>Tài khoản</p>
              <span className='fw-bold fs-6'>Đăng nhập</span>
            </div>
          </Link>
          <button className='btn border rounded-circle px-1 py-0 h-50 ' onClick={() => setIsMenuOpen(false)}><i className="bi bi-x fs-4"></i></button>
        </div>
        <div className='menu-content'>
          <ul className="menu-list">
            <li>
              <Link to="/products/all" onClick={handleItemClick} className='menu-hover'>Tất cả sản phẩm</Link>
            </li>
            {titles.map((title) => (
              <li key={title.id} className="dropdown-submenu">
                <Link
                  to={`/products/${title.path}`}
                  className='d-flex justify-content-between menu-hover'
                  aria-haspopup="true"
                  aria-expanded={title.subtitles.length > 0 ? 'false' : undefined}
                >
                  <span>{title.name}</span>
                  {title.subtitles.length > 0 && (
                    <i className="bi bi-caret-right-fill d-flex align-items-center"></i>
                  )}
                </Link>
                {title.subtitles.length > 0 && (
                  <ul className="menu-list">
                    {title.subtitles.map((subtitle, index) => (
                      <li key={index} className='menu-hover'>
                        <Link
                          to={`/products/${subtitle.value}`}
                          onClick={handleItemClick}
                        >
                          {subtitle.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <ul className="menu-list">
            <li>
              <Link to="#" onClick={handleItemClick} className='menu-hover'>Giới thiệu</Link>
            </li>
            <li className="dropdown-submenu">
              <Link to="#" title='Thực phẩm tươi sống' className='d-flex justify-content-between menu-hover'>
                <span>Khuyến mãi</span>
                <i className="bi bi-caret-right-fill d-flex align-items-center"></i>
              </Link>
              <ul className="menu-list">
                <li className='menu-hover'><Link to="#" onClick={handleItemClick}>Flash Sale 1 khung giờ</Link></li>
                <li className='menu-hover'><Link to="#" onClick={handleItemClick}>Flash Sale nhiều khung giờ</Link></li>
              </ul>
            </li>
            <li>
              <Link to="#" onClick={handleItemClick} className='menu-hover'>Tin tức</Link>
            </li>
            <li>
              <Link to="#" onClick={handleItemClick} className='menu-hover'>Kiểm tra đơn hàng</Link>
            </li>
            <li>
              <Link to="#" onClick={handleItemClick} className='menu-hover'>Liên hệ</Link>
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

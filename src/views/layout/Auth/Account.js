import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Account = ({ onLogin, authController }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const user = await authController.getCurrentUser();
      setCurrentUser(user);
      setLoading(false);
      if (!user) {
        navigate('/account/login');
      }
    }
    fetchUser();
  }, [authController, navigate]);

  const handleLogout = async () => {
    await authController.logout();
    navigate('/account/login');
  };

  if (loading) {
    return <div>Đang tải...</div>;
  }

  if (!currentUser) {
    return null;
  }

  return (
    <div className='bg-success-subtle'>
      <div className="breadcrumbs">
        <div className="container">
          <ul className="breadcrumb py-3 d-flex flex-wrap align-items-center">
            <li className="home">
              <Link className="link hover" to="/" title="Trang chủ" style={{ textDecoration: 'none', color: 'inherit' }}>
                Trang chủ
              </Link>
              <span className="mx-1 md:mx-2 inline-block">&nbsp;/&nbsp;</span>
            </li>
            <li>
              <span className="text-secondary">Trang khách hàng</span>
            </li>
          </ul>
        </div>
      </div>
      <section className="section section-main-account">
        <div className="container">
          <div>
            <div className="row">
              <div className="col-3">
                <div className="block-account lg:border-r border-neutral-100">
                  <h5 className="title-account font-semibold fs-4" style={{ color: 'var(--color-secondary)' }}>
                    Trang tài khoản
                  </h5>
                  <p>
                    Xin chào,{' '}
                    <span className="fw-semibold">
                      {currentUser.firstName} {currentUser.lastName}
                    </span>
                    !
                  </p>
                  <ul className="space-y-3 mt-5 list-disc pl-4">
                    <li>
                      <Link className="title-info link font-semibold text-secondary" to="/account">
                        Thông tin tài khoản
                      </Link>
                    </li>
                    <li>
                      <Link className="title-info link font-semibold" to="/account/orders">
                        Đơn hàng của bạn
                      </Link>
                    </li>
                    <li>
                      <Link className="title-info link font-semibold" to="/account/changepassword">
                        Đổi mật khẩu
                      </Link>
                    </li>
                    <li>
                      <Link className="title-info link font-semibold" to="/account/addresses">
                        Sổ địa chỉ (0)
                      </Link>
                    </li>
                    <li>
                      <button
                        className="title-info link font-semibold text-error"
                        onClick={handleLogout}
                        style={{ background: 'none', border: 'none', padding: 0 }}
                      >
                        Đăng xuất
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-9 bg-background rounded-lg px-3 py-4 mb-6">
                <h1 className="text-h4 font-semibold mb-2">Thông tin tài khoản</h1>
                <div className="form-signup name-account m992 space-y-2">
                  <p>
                    <strong>Họ tên:</strong> {currentUser.firstName} {currentUser.lastName}
                  </p>
                  <p>
                    <strong>Email:</strong> {currentUser.email}
                  </p>
                  <p>
                    <strong>Số điện thoại:</strong> {currentUser.phoneNumber || 'Chưa cung cấp'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;
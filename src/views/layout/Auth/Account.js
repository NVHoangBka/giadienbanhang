import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Account = ({ onLogin, authController }) => {
    const navigate = useNavigate();
    const currentUser = authController.getCurrentUser();


    return (
        <div className='bg-success-subtle'>
            <div class="breadcrumbs">
                <div class="container">
                    <ul class="breadcrumb py-3 d-flex flex-wrap align-items-center">
                        <li class="home">
                            <Link class="link hover" to="/" title="Trang chủ" style={{textDecoration: 'none', color: 'inherit'}}>Trang chủ</Link>
                            <span class="mx-1 inline-block">&nbsp;/&nbsp;</span>
                        </li>
                        <li>    
                        <span class="text-secondary">Trang khách hàng</span>
                        </li>
                    </ul>
                </div>
            </div>
            <section class="section section-main-account">
                <div class="container">
                    <div class="">
                        <div class="row pb-5">
                            <div className='col-3'> 
                                <div class="block-account border-end border-secondary-subtle">
                                    <h5 class="title-account fw-semibold fs-4 text-active">Trang tài khoản</h5>
                                    <p className='ms-3'>Xin chào, <span class="fw-semibold">{currentUser.firstName} {currentUser.lastName}</span>!</p>
                                    <ul class="space-y-3 mt-1 list-disc pl-4">
                                        <li className='mt-1'>
                                            <Link class="title-info link fw-semibold fs-7 text-decoration-none text-active hover">Thông tin tài khoản</Link>
                                        </li>
                                        <li className='mt-1'>
                                            <Link class="title-info link fw-semibold fs-7 text-decoration-none hover" to="/account/orders">Đơn hàng của bạn</Link>
                                        </li>
                                        <li className='mt-1'>
                                            <Link class="title-info link fw-semibold fs-7 text-decoration-none hover" to="/account/changepassword">Đổi mật khẩu</Link>
                                        </li>
                                        <li className='mt-1'>
                                            <Link class="title-info link fw-semibold fs-7 text-decoration-none hover" to="/account/addresses">Sổ địa chỉ (0)</Link>
                                        </li>
                                        <li className='mt-1'>
                                            <Link class="title-info link fw-semibold fs-7 text-danger text-decoration-none hover" to="/account/logout">Đăng xuất</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-9 bg-white rounded-4 px-3 py-4 mb-6">
                                <h1 class="fs-3 fw-semibold mb-2">Thông tin tài khoản</h1>
                                <div class="form-signup name-account m992 space-y-2 fs-7">
                                    <p><strong>Họ tên:</strong> {currentUser.firstName} {currentUser.lastName}</p>
                                    <p><strong>Email:</strong> {currentUser.email}</p>
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
import React from 'react';
import ProductModel from '../models/ProductModel';

const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice = ProductModel.calculateTotalPrice(cartItems);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title mb-4">Giỏ hàng</h2>
        {cartItems.length === 0 ? (
          <p>Giỏ hàng trống</p>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div key={index} className="d-flex justify-content-between mb-2">
                <span>{item.name}</span>
                <div>
                  <span>{item.price.toLocaleString('vi-VN')} VNĐ</span>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="btn btn-sm btn-danger ms-2"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            ))}
            <p className="mt-4 fw-bold">Tổng: {totalPrice.toLocaleString('vi-VN')} VNĐ</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
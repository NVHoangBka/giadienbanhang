import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import OrderController from '../../../../controllers/OrderController';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchOrders() {
      setLoading(true);
      setError('');
      try {
        const result = await OrderController.getOrders();
        if (result.success) {
          setOrders(result.orders);
        } else {
          throw new Error(result.message);
        }
      } catch (error) {
        console.error('OrderList fetchOrders error:', error);
        setError(error.message || 'Không thể tải danh sách đơn hàng.');
      } finally {
        setLoading(false);
      }
    }
    fetchOrders();
  }, []);

  if (loading) {
    return <div className="text-center">Đang tải đơn hàng...</div>;
  }

  return (
    <div>
      <h1 className="fs-3 fw-semibold mb-3">Đơn hàng của bạn</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      {orders.length === 0 ? (
        <p className="fs-6">Bạn chưa có đơn hàng nào.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Mã đơn hàng</th>
                <th>Tổng tiền</th>
                <th>Trạng thái</th>
                <th>Ngày tạo</th>
                <th>Chi tiết</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.orderId}>
                  <td>{order.orderId}</td>
                  <td>{order.total.toLocaleString('vi-VN')} VNĐ</td>
                  <td>{order.status}</td>
                  <td>{new Date(order.createdAt).toLocaleDateString('vi-VN')}</td>
                  <td>
                    <Link to={`/account/orders/${order.orderId}`} className="text-primary">
                      Xem chi tiết
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderList;
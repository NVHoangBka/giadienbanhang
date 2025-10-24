import OrderModel from '../models/OrderModel';

class OrderController {
  async getOrders() {
    try {
      const orders = await OrderModel.getOrders();
      return { success: true, orders };
    } catch (error) {
      return { success: false, message: error.message || 'Không thể tải danh sách đơn hàng.' };
    }
  }

  async getAddressCount(userId) {
    try {
      const count = await OrderModel.getAddressCount(userId);
      return { success: true, count };
    } catch (error) {
      return { success: false, message: error.message || 'Không thể tải số lượng địa chỉ.' };
    }
  }
}

export default new OrderController();
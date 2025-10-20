import UserModel from '../models/UserModel.js';
import { users as initialUsers } from '../data/users.js';

class AuthService {
  constructor() {
    // Tải người dùng từ localStorage hoặc dùng dữ liệu ban đầu
    this.users = JSON.parse(localStorage.getItem('users')) || initialUsers;
    this.userModel = UserModel;
  }

  register(newUser) {
    // Kiểm tra xem email đã tồn tại chưa
    if (this.users.some(user => user.email === newUser.email)) {
      return { success: false, message: 'Email đã tồn tại' };
    }
    // Thêm người dùng mới (tạo ID nếu cần)
    newUser.id = this.users.length > 0 ? Math.max(...this.users.map(u => u.id)) + 1 : 1;
    this.users.push(newUser);
    localStorage.setItem('users', JSON.stringify(this.users));
    return { success: true, user: newUser };
  }

  login(email, password) {
    // Sử dụng danh sách người dùng động từ localStorage thay vì mảng tĩnh
    const user = this.users.find(user => user.email === email && user.password === password) || null;
    return user;
  }

  logout() {
    this.userModel.clearCurrentUser();
  }

  isAuthenticated() {
    return !!this.userModel.getCurrentUser();
  }

  getCurrentUser() {
    return this.userModel.getCurrentUser();
  }

  setCurrentUser(user) {
    this.userModel.setCurrentUser(user);
  }
}

export default new AuthService();
import UserModel from '../models/UserModel.js';
import { users as initialUsers } from '../data/users.js';

class AuthService {
  constructor() {
    // Tải người dùng từ localStorage, nếu không có thì dùng dữ liệu ban đầu
    this.users = JSON.parse(localStorage.getItem('users')) || initialUsers;
    this.userModel = UserModel;
  }

  register(newUser) {
    // Kiểm tra email trùng lặp
    if (this.users.some(user => user.email === newUser.email)) {
      return { success: false, message: 'Email đã tồn tại' };
    }
    // Tạo ID mới
    newUser.id = this.users.length > 0 ? Math.max(...this.users.map(u => u.id)) + 1 : 1;
    this.users.push(newUser);
    localStorage.setItem('users', JSON.stringify(this.users)); // Lưu vào localStorage
    return { success: true, user: newUser };
  }

  login(email, password) {
    // Tìm người dùng với email và mật khẩu khớp
    const user = this.users.find(user => user.email === email && user.password === password);
    if (user) {
      this.userModel.setCurrentUser(user); // Lưu người dùng hiện tại
      return user;
    }
    return null; // Trả về null nếu không tìm thấy
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
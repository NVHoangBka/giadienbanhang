import UserModel from '../models/UserModel.js';

class AuthService {
  constructor() {
    this.userModel = UserModel;
    // Khôi phục người dùng từ token khi khởi tạo
    this.getCurrentUser();
  }

  async register(newUser) {
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      });
      const result = await response.json();
      return result;
    } catch (error) {
      return { success: false, message: 'Lỗi hệ thống, vui lòng thử lại.' };
    }
  }

  async login(email, password) {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const result = await response.json();
      if (result.success) {
        localStorage.setItem('token', result.token); // Lưu token
        this.userModel.setCurrentUser(result.user); // Lưu thông tin người dùng
      }
      return result;
    } catch (error) {
      return { success: false, message: 'Lỗi hệ thống, vui lòng thử lại.' };
    }
  }

  async logout() {
    localStorage.removeItem('token');
    this.userModel.clearCurrentUser();
    await fetch('http://localhost:5000/api/logout', {
      method: 'POST'
    });
  }

  isAuthenticated() {
    return !!this.userModel.getCurrentUser();
  }

  async getCurrentUser() {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const response = await fetch('http://localhost:5000/api/user', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const result = await response.json();
      if (result.success) {
        this.userModel.setCurrentUser(result.user);
        return result.user;
      } else {
        localStorage.removeItem('token');
        this.userModel.clearCurrentUser();
        return null;
      }
    } catch (error) {
      localStorage.removeItem('token');
      this.userModel.clearCurrentUser();
      return null;
    }
  }

  setCurrentUser(user) {
    this.userModel.setCurrentUser(user);
  }
}

export default new AuthService();
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
      result.status = response.status;
      if (result.success) {
        localStorage.setItem('accessToken', result.accessToken);
        localStorage.setItem('refreshToken', result.refreshToken);
      }
      return result;
    } catch (error) {
      return { 
        success: false, 
        message: 'Lỗi hệ thống, vui lòng thử lại.', 
        status: 500 
      };
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
        localStorage.setItem('accessToken', result.accessToken);
        localStorage.setItem('refreshToken', result.refreshToken);
        this.userModel.setCurrentUser(result.user);
      }
      return result;
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Lỗi hệ thống, vui lòng thử lại.' };
    }
  }

  async refreshToken() {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) {
        return { success: false, message: 'Không có refresh token' };
      }
      const response = await fetch('http://localhost:5000/api/refresh-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken })
      });
      const result = await response.json();
      if (result.success) {
        localStorage.setItem('accessToken', result.accessToken);
        localStorage.setItem('refreshToken', result.refreshToken);
      }
      return result;
    } catch (error) {
      console.error('Refresh token error:', error);
      return { success: false, message: 'Không thể làm mới token' };
    }
  }

  async logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.userModel.clearCurrentUser();
    await fetch('http://localhost:5000/api/logout', {
      method: 'POST',
      headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
    });
  }

  async getCurrentUser() {
    const token = localStorage.getItem('accessToken');
    if (!token) return null;
    try {
      const response = await fetch('http://localhost:5000/api/user', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const result = await response.json();
      if (result.success) {
        this.userModel.setCurrentUser(result.user);
        return result.user;
      } else if (result.expired) {
        const refreshResult = await this.refreshToken();
        if (refreshResult.success) {
          return await this.getCurrentUser(); // Thử lại với token mới
        } else {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          this.userModel.clearCurrentUser();
          return null;
        }
      } else {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        this.userModel.clearCurrentUser();
        return null;
      }
    } catch (error) {
      console.error('Get user error:', error);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      this.userModel.clearCurrentUser();
      return null;
    }
  }

  isAuthenticated() {
    return !!this.userModel.getCurrentUser();
  }

}

export default new AuthService();
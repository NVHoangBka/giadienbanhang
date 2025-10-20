import AuthService from '../services/AuthService.js';

class AuthController {
  constructor() {
    this.authService = AuthService;
  }

  register(newUser) {
    const result = this.authService.register(newUser);
    if (result.success) {
      // Tự động đặt người dùng hiện tại sau khi đăng ký thành công
      this.authService.setCurrentUser(result.user);
    }
    return result;
  }

  login(email, password) {
    const user = this.authService.login(email, password);
    if (user) {
      this.authService.setCurrentUser(user);
      return { success: true, user };
    }
    return { success: false, message: 'Tên đăng nhập hoặc mật khẩu không đúng' };
  }

  logout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  getCurrentUser() {
    return this.authService.getCurrentUser();
  }
}

export default new AuthController();
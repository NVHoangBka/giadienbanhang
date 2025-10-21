import AuthService from '../services/AuthService.js';

class AuthController {
  constructor() {
    this.authService = AuthService;
  }

  register(newUser) {
    const result = this.authService.register(newUser);
    if (result.success) {
      this.authService.setCurrentUser(result.user);
    }
    return result;
  }

  login(email, password) {
    const user = this.authService.login(email, password);
    if (user) {
      return { success: true, user, message: 'Đăng nhập thành công'};
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
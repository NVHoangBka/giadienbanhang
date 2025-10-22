import AuthService from '../services/AuthService.js';

class AuthController {
  constructor() {
    this.authService = AuthService;
  }

  async register(newUser) {
    return await this.authService.register(newUser);
  }

  async login(email, password) {
    return await this.authService.login(email, password);
  }

  async logout() {
    await this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  async getCurrentUser() {
    return await this.authService.getCurrentUser();
  }
}

export default new AuthController();
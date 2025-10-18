import UserModel from '../models/UserModel.js';

class AuthService {
  constructor() {
    this.userModel = UserModel;
  }

  register(newUser) {
    if (this.users.some(user => user.email === newUser.email)) {
      return { success: false, message: 'Email đã tồn tại' };
    }
    this.users.push(newUser);
    localStorage.setItem('users', JSON.stringify(this.users));
    return { success: true, user: newUser };
  }

  login(email, password) {
    return this.userModel.authenticate(email, password);
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
}

export default new AuthService();
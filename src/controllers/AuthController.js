import UserModel from '../models/UserModel';

class AuthController {
  // Đăng nhập
  login(username, password) {
    const user = UserModel.authenticate(username, password);
    if (user) {
      UserModel.setCurrentUser(user);
      return { success: true, user };
    }
    return { success: false, message: 'Tên đăng nhập hoặc mật khẩu không đúng' };
  }

  // Đăng xuất
  logout() {
    UserModel.clearCurrentUser();
  }

  // Kiểm tra trạng thái đăng nhập
  isAuthenticated() {
    return !!UserModel.getCurrentUser();
  }

  // Lấy thông tin người dùng hiện tại
  getCurrentUser() {
    return UserModel.getCurrentUser();
  }
}

export default AuthController;
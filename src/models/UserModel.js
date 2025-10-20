// Không nhập mảng users tĩnh nữa; AuthService xử lý dữ liệu động

class UserModel {
  static currentUser = null;

  static setCurrentUser(user) {
    this.currentUser = user;
  }

  static getCurrentUser() {
    return this.currentUser;
  }

  static clearCurrentUser() {
    this.currentUser = null;
  }
}

export default UserModel;
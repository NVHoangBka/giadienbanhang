class UserModel {
  static currentUser = null;

  static setCurrentUser(user) {
    this.currentUser = user;
    console.log('Đặt người dùng hiện tại:', user); // Debug
  }

  static getCurrentUser() {
    console.log('Lấy người dùng hiện tại:', this.currentUser); // Debug
    return this.currentUser;
  }

  static clearCurrentUser() {
    this.currentUser = null;
    console.log('Xóa người dùng hiện tại'); // Debug
  }
}

export default UserModel;
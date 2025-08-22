// Danh sách người dùng mẫu (mô phỏng cơ sở dữ liệu)
const users = [
  { id: 1, username: "admin", password: "admin123", name: "Admin User" },
  { id: 2, username: "user", password: "user123", name: "Regular User" },
];

class UserModel {
  // Tìm người dùng theo username và password
  static authenticate(username, password) {
    return users.find((user) => user.username === username && user.password === password);
  }

  // Lấy thông tin người dùng từ localStorage
  static getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  // Lưu thông tin người dùng vào localStorage
  static setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  // Xóa thông tin người dùng khỏi localStorage
  static clearCurrentUser() {
    localStorage.removeItem('currentUser');
  }
}

export default UserModel;
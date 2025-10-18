import { users } from '../data/users.js';

class UserModel {
  static currentUser = null;

  static authenticate(email, password) {
    return users.find(user => user.email === email && user.password === password) || null;
  }

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
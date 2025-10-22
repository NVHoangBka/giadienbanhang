const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET;

function generateAccessToken(user) {
  return jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '24h' });
}

class AuthController {
  static async register(req, res) {
    try {
      const { email, password, firstName, lastName, phoneNumber } = req.body;
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ success: false, message: 'Email đã tồn tại' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        email,
        password: hashedPassword,
        firstName,
        lastName,
        phoneNumber
      });
      res.json({ success: true, message: 'Đăng ký thành công' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Lỗi hệ thống' });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ success: false, message: 'Tên đăng nhập hoặc mật khẩu không đúng' });
      }

      const accessToken = generateAccessToken(user);
      res.json({ success: true, accessToken, user: { id: user._id, email: user.email, firstName: user.firstName, lastName: user.lastName, phoneNumber: user.phoneNumber } });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Lỗi hệ thống' });
    }
  }

  static async getUser(req, res) {
    try {
      const authHeader = req.headers.authorization;
      const token = authHeader && authHeader.split(' ')[1];
      if (!token) {
        return res.status(401).json({ success: false, message: 'Chưa đăng nhập' });
      }

      const decoded = jwt.verify(token, JWT_SECRET);
      const user = await User.findById(decoded.id);
      if (!user) {
        return res.status(404).json({ success: false, message: 'Không tìm thấy người dùng' });
      }
      res.json({ success: true, user: { id: user._id, email: user.email, firstName: user.firstName, lastName: user.lastName, phoneNumber: user.phoneNumber } });
    } catch (error) {
      res.status(401).json({ success: false, message: 'Token không hợp lệ' });
    }
  }

  static async getUsers(req, res) {
    try {
      const authHeader = req.headers.authorization;
      const token = authHeader && authHeader.split(' ')[1];
      if (!token) {
        return res.status(401).json({ success: false, message: 'Chưa đăng nhập' });
      }

      const decoded = jwt.verify(token, JWT_SECRET);
      const users = await User.find();
      res.json({ success: true, users: users.map(user => ({
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber
      })) });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Lỗi hệ thống' });
    }
  }

  static async logout(req, res) {
    res.json({ success: true, message: 'Đăng xuất thành công' });
  }
}

module.exports = AuthController;
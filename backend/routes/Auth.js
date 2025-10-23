const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const authMiddleware = require('../middleware/auth');

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/refresh-token', AuthController.refreshToken);
router.get('/user', authMiddleware, AuthController.getCurrentUser);
router.post('/logout', authMiddleware, AuthController.logout);
router.get('/users', authMiddleware, AuthController.getUsers);

module.exports = router;
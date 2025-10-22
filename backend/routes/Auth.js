const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.get('/user', AuthController.getUser);
router.get('/users', AuthController.getUsers);
router.post('/logout', AuthController.logout);

module.exports = router;
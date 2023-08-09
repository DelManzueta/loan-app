const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Create a new user
router.post('/', userController.createUser);

// Get all users (optional)
router.get('/', userController.getUsers);

module.exports = router;

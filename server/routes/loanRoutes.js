const express = require('express');
const loanController = require('../controllers/loanController');
const router = express.Router();
const validation = require('../middleware/validation');

router.post('/', validation.validateLoan, loanController.createLoan);

// Create a new loan
router.post('/', loanController.createLoan);

// Get all loans for a specific user
router.get('/user/:userId', loanController.getUserLoans);

module.exports = router;

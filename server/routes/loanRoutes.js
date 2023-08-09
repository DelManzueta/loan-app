const express = require('express');
const loanController = require('../controllers/loanController');
const validation = require('../middleware/validation');
const router = express.Router();

router.post('/', validation.validateLoan, loanController.createLoan);
router.get('/user/:userId', loanController.getUserLoans);

module.exports = router;

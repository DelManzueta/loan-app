const validation = require('../middleware/validation');

router.post('/', validation.validateLoan, loanController.createLoan);

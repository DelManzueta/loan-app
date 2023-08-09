exports.validateLoan = (req, res, next) => {
	const { principal, interestRate, amortizationTerm } = req.body;
	if (!principal || !interestRate || !amortizationTerm) {
		return res.status(400).json({ error: 'Missing required fields' });
	}
	next();
};

const validation = require('../middleware/validation');

router.post('/', validation.validateLoan, loanController.createLoan);

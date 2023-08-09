exports.validateLoan = (req, res, next) => {
	const { principal, interestRate, amortizationTerm } = req.body;
	if (!principal || !interestRate || !amortizationTerm) {
		return res.status(400).json({ error: 'Missing required fields' });
	}
	next();
};

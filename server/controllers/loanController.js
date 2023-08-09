const Loan = require('../models/Loan');

exports.createLoan = async (req, res) => {
	try {
		const loan = new Loan(req.body);
		await loan.save();
		res.status(201).json(loan);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const Loan = require('../models/Loan');

exports.createLoan = async (req, res) => {
	try {
		const loan = new Loan(req.body);
		await loan.save();
		res.status(201).json(loan);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

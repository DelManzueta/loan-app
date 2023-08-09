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

exports.getUserLoans = async (req, res) => {
	try {
		const userId = req.params.userId;
		const loans = await Loan.find({ user: userId });
		res.status(200).json(loans);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

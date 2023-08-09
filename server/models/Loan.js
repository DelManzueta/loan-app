const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	principal: { type: Number, required: true },
	interestRate: { type: Number, required: true },
	amortizationTerm: { type: Number, required: true },
	schedule: [
		{
			paymentNumber: Number,
			principalPayment: Number,
			interestPayment: Number,
			totalPayment: Number,
			remainingBalance: Number,
		},
	],
});

module.exports = mongoose.model('Loan', loanSchema);

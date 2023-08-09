exports.calculateAmortizationSchedule = (
	principal,
	interestRate,
	amortizationTerm
) => {
	const monthlyInterestRate = interestRate / 12 / 100;
	const monthlyPayment =
		(principal * monthlyInterestRate) /
		(1 - Math.pow(1 + monthlyInterestRate, -amortizationTerm));
	const schedule = [];

	for (let month = 1; month <= amortizationTerm; month++) {
		const interestPayment = principal * monthlyInterestRate;
		const principalPayment = monthlyPayment - interestPayment;
		principal -= principalPayment;

		schedule.push({
			paymentNumber: month,
			principalPayment,
			interestPayment,
			totalPayment: monthlyPayment,
			remainingBalance: principal,
		});
	}

	return schedule;
};

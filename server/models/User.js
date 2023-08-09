const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	loans: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Loan' }],
});

module.exports = mongoose.model('User', userSchema);

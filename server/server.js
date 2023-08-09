const express = require('express');
const userRoutes = require('./routes/userRoutes');
const loanRoutes = require('./routes/loanRoutes');
const errorHandler = require('./middleware/errorHandler');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/users', userRoutes);
app.use('/loans', loanRoutes);
app.use(errorHandler.errorHandler);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

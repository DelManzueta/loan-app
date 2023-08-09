const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const userRoutes = require('./routes/userRoutes');
const loanRoutes = require('./routes/loanRoutes');

// Middleware to parse JSON requests
app.use(express.json());

// Example route to test the server
app.get('/', (req, res) => {
	res.send('Server is running!');
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

app.use('/users', userRoutes);
app.use('/loans', loanRoutes);

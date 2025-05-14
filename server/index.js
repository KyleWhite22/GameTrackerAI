require('dotenv').config();
const express = require('express');
const cors = require('cors');
const steamAuth = require('./auth/steam');
const gamesRoute = require('./routes/games'); 
console.log("games route loaded");


const app = express();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.get('/test', (req, res) => {
	res.send('Server is alive');
});

app.use('/auth', steamAuth);
app.use('/api/games', gamesRoute); 
app.use((req, res) => {
	res.status(404).send(' Route not found: ${req.originalUrl}');
});
app.listen(5000, () => {
	console.log(' Server listening on http://localhost:5000');
});
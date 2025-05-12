const express = require('express');
const cors = require('cors');
const steamAuth = require('./auth/steam');

const app = express();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use('/auth', steamAuth);

app.listen(5000, () => {
  console.log('Server listening on http://localhost:5000');
});
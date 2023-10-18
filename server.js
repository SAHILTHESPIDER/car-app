const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const dbconnection = require('./db');

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Node.js server started on Port ${port}`)); // Fixed the interpolation here

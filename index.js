const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = require('./router')

//DB Setup
mongoose.connect('mongodb://localhost:auth/auth');

//App Setup
app.use(morgan('combined')); // Logging
app.use(bodyParser.json({ type: '*/*'}));
router(app);

// Server setup
const port = process.env.PORT || 8000;
const server = http.createServer(app);

server.listen(port);
console.log("Server is running on port", port);

const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

//App Setup
app.use(morgan('combined')); // Logging
app.use(bodyParser.json({ type: '*/*'}));

// Server setup
const port = process.env.PORT || 8000;
const server = http.createServer(app);

server.listen(port);
console.log("Server is running on port", port);

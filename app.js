// File creating and configuring an Express instance to handle HTTP traffic

// Import the Express library
const express = require('express');

// Create new Express app instance
const app = express();

// For code readability - create a reference to the PORT environment variable (set by Heroku and subject to change)
const port = process.env.PORT;

// Allow middlewares to parse HTTP request data from both query strings and JSON objects
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Specify the directory holding the page templates which will be returned to clients
app.set('views', __dirname + '/views');

// Configure rendering engine
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Allows linking of CSS stylesheet in HTML page head
app.use(express.static(`${__dirname}/views/`));

// Import the routing from routes/main.js
require('./routes/main')(app);

// Event listener checking for client connections to the server
app.listen((port || 8000), () => console.log(`Listening on port ${port}.`));
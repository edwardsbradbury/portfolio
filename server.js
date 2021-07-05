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

// Specify the directory holding the HTML file into which the root App component will be injected
app.use(express.static(`${__dirname}/client/dist`));

// Event listener checking for client connections to the server
app.listen(port, () => console.log(`Listening on port: ${port}.`));
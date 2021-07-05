// File creating and configuring an Express instance to handle HTTP traffic

// Import the Express library
const express = require('express');

// const serveStatic = require('serve-static');

// Create new Express app instance
const app = express();

// For code readability - create a reference to the PORT environment variable (set by Heroku and subject to change)
const port = process.env.PORT;

// Allow middlewares to parse HTTP request data from both query strings and JSON objects
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Specify the directory holding the page templates which will be returned to clients
// app.use(serveStatic(`${__dirname}/client/dist`));
app.use(express.static(`${__dirname}/client/dist`));

// // Configure rendering engine
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);

// // Allows linking of CSS stylesheet in HTML page head
// app.use(express.static(`${__dirname}/views/`));  

// // Import the routing from routes/main.js
// require('./routes/main')(app);

// app.get('/', function(req, res) {
//   res.sendFile(`${__dirname}/client/dist/index.html`);
// })

// Event listener checking for client connections to the server
app.listen(port, () => console.log(`Listening on port: ${port}.`));
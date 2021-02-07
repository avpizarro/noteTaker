// DEPENDENCIES
// Require the dependencies
const http = require('http');
const path = require('path');
const express = require('express');

// EXPRESS CONFIGURATION
// Set up the Express App
const app = express();

// Set up the Middleware
app.use(express.static(path.join(__dirname, '/public')));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
// Point the server towards the "route" files
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// LISTENER
// Define dynamic port
const PORT = process.env.PORT || 3030;

// Start the server to begin listening
app.listen(PORT,() => {
    console.log(`I am listening on PORT ${PORT}`);
});
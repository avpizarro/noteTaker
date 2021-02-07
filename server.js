const http = require('http');
const path = require('path');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3030;

// Middleware
app.use(express.static(path.join(__dirname, '/public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT,() => {
    console.log(`I am listening on PORT ${PORT}`);
});
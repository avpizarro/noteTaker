// DEPENDENCIES
// Require path to help setting up the correct file path to our html
const path = require('path');

module.exports = (app) => {

    // HTML GET requests
    // Show the homepage index.html
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    // Show the notes.html page
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
    
    // Show the homepage index.html if the path is not define correctly
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
}


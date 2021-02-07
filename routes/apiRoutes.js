// LOAD DATA
// Set the route link to access the notes date that is stored in db.json
let noteData = require("../db/db");

// Define a starting id number for each note
let idNum = 1;

module.exports = (app) => {
  // API GET Request
  // Show the user a JSON of the notes data
  app.get("/api/notes", (req, res) => res.json(noteData));

  // API POST Request
  // The user's input is sent to the server and pushed to the db.json file
  app.post("/api/notes", (req, res) => {
    const note = {};
    note.id = idNum++;
    note.title = req.body.title;
    note.text = req.body.text;
    noteData.push(note);
  });

  // API DELETE Request
  // Tells the server to remove the selected note from the db.json file using its id
  // to identify the correct one
  app.delete("/api/notes/:id", function (req, res) {
    const id = parseInt(req.params.id);
    noteData = noteData.filter((item) => item.id != id);
    return res.json(noteData);
  });
};

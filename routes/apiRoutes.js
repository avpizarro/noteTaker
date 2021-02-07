let noteData = require("../db/db");
const fs = require("fs");

let idNum = 1;

module.exports = (app) => {
  app.get("/api/notes", (req, res) => res.json(noteData));

  app.post("/api/notes", (req, res) => {
    const note = {};
    note.id = idNum++;
    note.title = req.body.title;
    note.text = req.body.text;
    noteData.push(note);
  });

  app.delete("/api/notes/:id", function (req, res) {
    const id = parseInt(req.params.id);
    noteData = noteData.filter((item) => item.id != id);
  });
};

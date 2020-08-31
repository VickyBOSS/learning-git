const express = require("express");

const app = express();

app.use(express.json());

app.get("", (req, res) => {
  res.send("<h1>Learning git basics</h1>");
});

module.exports = app;

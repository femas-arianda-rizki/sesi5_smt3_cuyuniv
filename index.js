const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const db = require("./connection");
const response = require("./response");

app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send("200");
// });

app.get("/", (req, res) => {
  response(200, "ini data", "lalala", res);
});

app.get("/cek", (req, res) => {
  res.send("hoho");
});

app.get("/mahasiswa/:nim", (req, res) => {
  const nim = req.params.nim;
  res.send(`spesifik mahasiswa by id ${nim}`);
});

app.post("/mahasiswa", (req, res) => {
  res.send("INI POSTING");
});

app.put("/mahasiswa", (req, res) => {
  res.send("INI PUT ATAU UPDATE DATA");
});

app.delete("/mahasiswa", (req, res) => {
  res.send("INI DELETE DATA");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

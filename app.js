const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.end("<h1>Welcome to our page</h1>");
});
app.listen(3000, () =>
  console.log("server is Runnning on:http://localhost:3000")
);

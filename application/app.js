const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("🚀 Node.js app running on ECS!!!");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.get("/load", (req, res) => {
  const end = Date.now() + 2000;
  while (Date.now() < end) {}
  res.send("CPU load done");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

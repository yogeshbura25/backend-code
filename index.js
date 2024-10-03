const express = require("express");

const app = express();
const PORT = 3004;

app.get("/", (req, res) => {
  res.send("Hello, You have achieved, yeh..!");
});

app.listen(PORT, () => {
  console.log(`Server is running successfully on port ${PORT}`);
});

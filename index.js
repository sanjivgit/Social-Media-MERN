const express = require("express");
const app = express();

const port = process.env.PORT || 8800;

app.get("/", (req, res) => {
  res.send("Hello guys");
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});

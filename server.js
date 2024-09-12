const express = require("express");
const path = require("path");
const app = express();

if (process.env.NODE_ENV === "production") {
  // Serve only the static files form the dist directory
  app.use(express.static(__dirname + "/dist/workport"));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname + "/dist/workport/index.html"));
  });
}

const PORT = process.env.PORT || 5000;
console.log(`App is runing on ${PORT}`);
app.listen(PORT);

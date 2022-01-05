/* eslint-disable no-console */
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const app = express();

const port = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME;

app.use(morgan("dev"));

app.use(express.static("./build"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./build", "index.html"));
});

app.listen(port, () => console.log(`${APP_NAME} Listening on port ${port}`));

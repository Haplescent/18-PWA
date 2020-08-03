const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

let PORT = process.env.PORT;
if (PORT == null || PORT == "") {
  PORT = 3000;
}

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
});

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json()); // for parsing application/json

const apiRoutes = require(path.join(__dirname, "./routes/api-routes"));
app.use(apiRoutes);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

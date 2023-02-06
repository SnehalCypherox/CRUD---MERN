const express = require("express");
var cors = require("cors");
const createError = require("http-errors");
require("./helper/init_mongodb");
const studentRoute = require("./routes/student.route")

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res, next) => {
  res.send("Hello, from express!");
});

app.use(cors());
app.use("/students", studentRoute);

app.use(async (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(5000, () => {
  console.log("server started");
});

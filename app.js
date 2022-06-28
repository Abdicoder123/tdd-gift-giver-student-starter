const gift_Exchange = require("./routes/gift-exchange");
const express = require("express");
const morgan = require("morgan");
morgan("tiny");
const app = express();
//var bodyParser = require("body-parser");

express.json();
module.exports = app;

app.get("/", (req, res) => {
  res.status(200).send({ ping: "pong" });
});
app.use("/gift-exchange", gift_Exchange);

const express = require("express");
const router = express.Router();
module.exports = router;

router.post("/pair", (req, res) => {
  res.status(200).send({ names: "Hey /pair" });
});
router.post("/traditional", (req, res) => {
  res.status(200).send({ names: "Hey /traditional" });
});

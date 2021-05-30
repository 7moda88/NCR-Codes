const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index")
});
router.get("/src", (req, res) => {
  res.render("src");
});
router.get("/cmd", (req, res) => {
  res.render("cmd");
});
router.use("/ping", (req, res) => {
  res.send(new Date());
});

module.exports = router;
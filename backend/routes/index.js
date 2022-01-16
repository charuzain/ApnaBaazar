const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(cors());
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;

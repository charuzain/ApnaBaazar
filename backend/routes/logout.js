const express = require("express");
const app = express();
// let cookieSession = require("cookie-session")

const router = express.Router();
module.exports = () => {
  router.post("/", (req, res) => {
    req.session= null;
    //res.redirect("/login");
    res.json("Successfully logout");
  });
  return router;
};

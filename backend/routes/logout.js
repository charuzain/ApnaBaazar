const express = require("express");
const app = express();
const router = express.Router();
const cookieSession = require("cookie-session");
app.use(
  cookieSession({
    name: "session",
    keys: ["key1"],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000,
  })
);
module.exports = () => {
  router.post("/", (req, res) => {
    req.session = null;
    //res.redirect("/login");
    res.json("Successfully logout");
  });
  return router;
};

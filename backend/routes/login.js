const express = require("express");
const router = express.Router();

module.exports = ({ getuserByEmail }) => {
  router.post("/", (req, res) => {
    const { email, password } = req.body;
    const errors = {
      email: "Enter Email",
      password: "Enter Password",
    };
    if (!email) {
      res.send(errors.email);
      return;
    } else if (!password) {
      res.send(errors.password);
      return;
    }

    getuserByEmail(email)
      .then((user) => {
        if (!user) {
          return res.json("User with this email doesnot exist");
        }
        if (user.password === password) {
          res.json("Login Successful");
        } else {
          res.json("Unsucessful Login");
        }
      })
      .catch((err) => err);
  });

  return router;
};

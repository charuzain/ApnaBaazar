/* eslint-disable camelcase */
const express = require("express");
const router = express.Router();
const { getUserByEmail } = require("../helpers/dbLoginHelpers");

module.exports = ({ addUser }) => {
  // check user has entered all the value
  // call the getuser function to chek if email already exist in database
  // if yes , tell the user email already exist and redirect to login page
  // if no insert the value in the database , and register as new message

  router.post("/", (res, req) => {
    const { first_name, last_name, email, password, phone, shipping_address } =
      req.body;
    const user = {
      first_name,
      last_name,
      email,
      password,
      phone,
      shipping_address,
    };

    if (
      user.first_name === "" ||
      user.last_name === "" ||
      user.email === " " ||
      user.password === "" ||
      user.phone === "" ||
      user.shipping_address === ""
    ) {
      return res.statusCode(400).send("Please fill in all the required fields");
    }

    getUserByEmail(user.email)
      .then((user) => {
        if (user) {
          res.json({
            msg: "Account with this email address already exists",
          });
        } else {
          return addUser(
            first_name,
            last_name,
            email,
            password,
            phone,
            shipping_address
          );
        }
      })
      .then((newUser) => res.json(newUser))
      .catch((err) => res.json({ error: err.message }));

    return router;
  });
};

const express = require("express");
const router = express.Router();

module.exports = ({getuserByEmail})=>{

  // router.get('/', (req, res) => {
  //   res.render("login");
  // })

  router.post('/', (req, res) => {
    const { email, password } = req.body;
    const errors = {
      email: "Enter Email",
      password: "Enter Password"
    }
    if (!email) {
      res.send(errors.email);
      return;
    } else if (!password) {
      res.send(errors.password);
      return;
    } 

    getuserByEmail(email)
      .then((user) => {
        if (user.password === password) {
          res.json('Login Successful');
        } else {
          res.json('Unsucessful Login');
        }
      })
      .catch((err) => {
        err
      })

    // const validEmailId = ifEmailExist(email);
    // if (!validEmailId) {
    //   res.send('Invalid Email Id');
    // } else {
    //   validPassword(email, password);
    // } 

    


  })
   
  
  
    return router;
  
  }
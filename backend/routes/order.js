const express = require("express");
const router = express.Router();
module.exports = ({}) => {

  //get order by id
  router.get('/', (req, res) => {
    // const userId = req.session
    const userId= req.session.us
    getUserOrders(UserId)
      .then((products) => res.json(products))
      .catch((err) => res.json({
        error: err.message
      })); 

  })

  // create order

  router.post('',(req,res)=>{


  })



 

  return router;
}
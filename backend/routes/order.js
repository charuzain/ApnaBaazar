const express = require("express");
const router = express.Router();
module.exports = ({ addOrderToDB }) => {
  //get order by id
  router.get("/", (req, res) => {
    // const userId = req.session
    const userId = req.session.us;
    getUserOrders(UserId)
      .then((products) => res.json(products))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  // create order
  //post:/api/orders
  // submits an order;
  router.post("/", (req, res) => {
    const { user_id, cart } = req.body; // here we are passing user-id and cart
    addOrderToDB(user_id, cart)
      .then((result) => {
        console.log(result);
        return res.json(result.order_id);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });
  return router;
};

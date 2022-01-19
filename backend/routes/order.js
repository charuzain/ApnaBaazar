/* eslint-disable camelcase */
const express = require("express");
const router = express.Router();
module.exports = ({ getOrderById, addCartToDB }) => {
  //get order by id
  router.post("/:orderId", (req, res) => {
    const { user_id, cart } = req.body;

    getOrderById(user_id, cart)
      .then((response) => {
        if (response) {
          return response;
        }
      })
      .then((order) => res.json(order))
      .catch((err) => res.json({ error: err.message }));
  });

  // create order
  //post:/api/orders
  // submits an order;
  router.post("/", (req, res) => {
    const { user_id, cart } = req.body; // here we are passing user-id and cart
    addCartToDB(user_id, cart)
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

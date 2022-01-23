const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51KEn3kIsnJ9gK5pCQDSZk8ZzWugo5qpZGyHjX0TyQQDg1J3IjxVtbixGGDfRd5baVloK2myHPJVGny31bX656ugO006SsgAQpf"
);

module.exports = () => {
  router.post("/", async (req, res) => {
    const { items } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100 * 100,
      currency: "cad",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  });
  return router;
};

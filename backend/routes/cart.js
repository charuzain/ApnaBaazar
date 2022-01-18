
const express = require("express");
const router = express.Router();

module.exports = ({ getUserCart, getCartById, addProductToCart, updateCart, removeProductFromCart  }) => {
  // create cart
router.post("/", (req, res) => {
    const { user_id, product_id, quantity } =
    req.body;

  // check if the product exist in the user cart
  getCartById(user_id, product_id)
    .then((response) => {
      console.log(response)
      if (response) {
        
        return updateCart(user_id, product_id, quantity+response.quantity);
      } else {
        // console.log(user_id)
        return addProductToCart(user_id, product_id, quantity);
      }
    })
    .then((cart) => res.json(cart))
    .catch((err) => res.json({ error: err.message }));

})

// update cart : increase and decrease the quantity in the cart
router.put("/", (req, res) => {
  const { user_id, product_id, quantity } =
    req.body;
  console.log(req.body)

  getCartById(user_id, product_id)
    .then((response) => {
      if (response) {
        return updateCart(user_id, product_id, quantity);
      } 
    })
    .then((cart) => res.json(cart))
    .catch((err) => res.json({ error: err.message }));

})

// get cart 
router.get("/:id", (req, res) => {
  const id = req.params.id
  console.log(id)
  getUserCart(id)
    .then((cart) => res.json(cart))
    .catch((err) => res.json({
      error: err.message
    }));

})

// delete item from cart 
router.delete("/", (req, res) => {
  const { user_id, product_id } = req.body;
  removeProductFromCart(user_id, product_id)
    .then((cart) => res.json(cart))
    .catch((err) => res.json({
      error: err.message
    }));

})

return router;
}

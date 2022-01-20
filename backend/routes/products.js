const express = require("express");
const router = express.Router();
module.exports = ({getAllProducts, getSingleProduct})=>{

  router.get('/',(req,res)=>{
  getAllProducts()
  .then((products)=>res.json(products))
    .catch((err) => res.json({
      error: err.message
    }));
    
})

router.get('/:id',(req,res)=>{
  const id = req.params.id
  getSingleProduct(id)
    .then((product)=>{res.json(product)})
    .catch((err) => res.json({
      error: err.message
    }));
})

  return router;
}
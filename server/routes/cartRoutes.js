const express = require("express");
const router = express.Router();
const {
  getProductsinCart,
  putProduct,
  deleteProduct,
  addFoodToCart,
} = require("../controllers/cart"); //traigo las funciones de mongoose

//METODOS Y RUTAS//

router.get("/products-cart", getProductsinCart); // uso las funciones y creo los metodos
router.put("/products-cart/:productId", putProduct);
router.delete("/products-cart/:productId", deleteProduct);
router.post("/products-cart", addFoodToCart);

module.exports = router;

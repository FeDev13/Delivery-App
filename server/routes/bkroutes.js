const express = require("express");
const router = express.Router();
const { addbkFood, getbkFoods } = require("../controllers/bkfoods");

router.post("/bkproductos", addbkFood); // uso las funciones y creo los metodos
router.get("/bkproductos", getbkFoods);
module.exports = router;

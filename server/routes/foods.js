const express = require("express");
const router = express.Router();
const { addFood, getFoods } = require("../controllers/foods"); //traigo las funciones de mongoose

//METODOS Y RUTAS//

router.post("/", addFood); // uso las funciones y creo los metodos
router.get("/", getFoods);

module.exports = router;

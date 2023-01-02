const express = require("express");
const router = express.Router();
const { addMcFood, getMcFoods } = require("../controllers/mcfoods");

router.post("/mcproductos", addMcFood); // uso las funciones y creo los metodos, NO TOCAR LA RUTA CON EL NOMBRE ESTATICO
router.get("/mcproductos", getMcFoods);
module.exports = router;

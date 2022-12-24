const express = require("express");
const router = express.Router();
const {
  createRestaurant,
  getRestaurants,
  deleteRestaurants,
} = require("../controllers/restaurants");

//rutas//
router.post("/", createRestaurant);
router.get("/", getRestaurants);
router.delete("/:id", deleteRestaurants);

module.exports = router;

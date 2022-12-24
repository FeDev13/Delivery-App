const express = require("express");
const router = express.Router();
const {
  createRestaurant,
  getRestaurants,
  deleteRestaurants,
  getRestosById,
  getRestosByName,
} = require("../controllers/restaurants");

//rutas//
router.post("/", createRestaurant);
router.get("/", getRestaurants);
router.get("/:nombre", getRestosByName);
router.delete("/:id", deleteRestaurants);

module.exports = router;

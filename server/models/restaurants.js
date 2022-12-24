const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  nombre: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
  },
  logo: {
    type: String,
    require: true,
  },
});

const Restaurant = mongoose.model("restaurant", restaurantSchema);

module.exports = Restaurant;

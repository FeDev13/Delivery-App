const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  imagen: { type: String, required: true },
  cantidad: { type: Number, required: true },
  precio: { type: Number, required: true },
});

const shoppingCart = mongoose.model("cart", cartSchema);

module.exports = shoppingCart;

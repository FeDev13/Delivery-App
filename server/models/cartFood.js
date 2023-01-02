const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  imagen: { type: String, required: true },
  agregado: { type: Boolean, default: false },
  precio: { type: Number, required: true },
});

const foodInCart = mongoose.model("cart", productSchema);

module.exports = foodInCart;

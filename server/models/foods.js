const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  categoria: { type: String, requied: true },
  precio: { type: Number, required: true },
  imagen: { type: String, required: true },
});

const Food = mongoose.model("food", foodSchema);

module.exports = Food;

const mongoose = require("mongoose");

const mcfoodSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  categoria: { type: String, requied: true },
  precio: { type: Number, required: true },
  imagen: { type: String, required: true },
});

const mcFood = mongoose.model("mcfood", mcfoodSchema);

module.exports = mcFood;

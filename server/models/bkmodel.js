const mongoose = require("mongoose");

const mcbkSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  categoria: { type: String, requied: true },
  precio: { type: Number, required: true },
  imagen: { type: String, required: true },
});

const bkFood = mongoose.model("bkfood", mcbkSchema);

module.exports = bkFood;

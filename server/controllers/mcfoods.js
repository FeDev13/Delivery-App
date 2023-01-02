const mcFoodModel = require("../models/mcfoods");

async function addMcFood(req, resp) {
  const mcFood = new mcFoodModel({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    categoria: req.body.categoria,
    precio: req.body.precio,
    imagen: req.body.imagen,
  });
  try {
    const newFood = await mcFood.save();
    resp.status(201).json({ newFood: newFood });
  } catch (error) {
    resp.status(400).json({ message: error.message });
  }
}

//BUSCA COMIDAS//

async function getMcFoods(req, resp) {
  try {
    const allFoods = await mcFoodModel.find();
    resp.json(allFoods);
  } catch (error) {
    resp.status(500).json({ message: error.message });
  }
}

//metodo

module.exports = { addMcFood, getMcFoods };

const foodModel = require("../models/foods");

//CREA COMIDA//

async function addFood(req, resp) {
  const food = new foodModel({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    categoria: req.body.categoria,
    precio: req.body.precio,
    imagen: req.body.imagen,
  });
  try {
    const newFood = await food.save();
    resp.status(201).json({ newFood: newFood });
  } catch (error) {
    resp.status(400).json({ message: error.message });
  }
}

//BUSCA COMIDAS//

async function getFoods(req, resp) {
  try {
    const allFoods = await foodModel.find();
    resp.json(allFoods);
  } catch (error) {
    resp.status(500).json({ message: error.message });
  }
}

//metodo

module.exports = { addFood, getFoods };

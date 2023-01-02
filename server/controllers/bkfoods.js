const bkFoodModel = require("../models/bkmodel");

async function addbkFood(req, resp) {
  const bkFood = new bkFoodModel({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    categoria: req.body.categoria,
    precio: req.body.precio,
    imagen: req.body.imagen,
  });
  try {
    const newFood = await bkFood.save();
    resp.status(201).json({ newFood: newFood });
  } catch (error) {
    resp.status(400).json({ message: error.message });
  }
}

//BUSCA COMIDAS//

async function getbkFoods(req, resp) {
  try {
    const allFoods = await bkFoodModel.find();
    resp.json(allFoods);
  } catch (error) {
    resp.status(500).json({ message: error.message });
  }
}

//metodo

module.exports = { addbkFood, getbkFoods };

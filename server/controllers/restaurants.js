const restaurantModel = require("../models/restaurants");

//crea nuevo restaurant//

async function createRestaurant(req, resp) {
  const restaurant = new restaurantModel({
    //restaurantModel viene del modelo que importo arriba
    nombre: req.body.nombre,
    rating: req.body.rating,
    logo: req.body.logo,
  });

  try {
    const newRestaurant = await restaurant.save(); //crea un modelo como variable restaurant
    resp.status(201).json({ newResto: newRestaurant });
  } catch (error) {
    resp.status(400).json({ message: error.message });
  }
}

//trae todos los reataurants//

async function getRestaurants(req, resp) {
  try {
    const allRestaurants = await restaurantModel.find(); //llama al modelo restaurantModel
    resp.json(allRestaurants);
  } catch (error) {
    resp.status(500).json({ message: error.message });
  }
}

//trae restos por nombre//

async function getRestosByName(req, resp) {
  const { nombre } = req.params;
  const restaurant = await restaurantModel.find({ nombre });
  resp.json(restaurant);
}

//borra restaurants//

async function deleteRestaurants(req, resp) {
  const { id } = req.params;
  await restaurantModel.remove({ _id: id });
  resp.json({ message: "datos eliminados" });
}

module.exports = {
  createRestaurant,
  getRestaurants,
  deleteRestaurants,
  getRestosByName,
};

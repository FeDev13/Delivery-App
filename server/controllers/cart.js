const Cart = require("../models/cart");
const Product = require("../models/foods");

//Chequea si hay comida en el pedido//
async function getProductsinCart(req, resp) {
  try {
    const products = await Cart.find();
    resp.json(products);
  } catch (error) {
    resp.status(500).json({ message: "no hay productos en el pedido" });
  }
}

const addFoodToCart = async (req, res) => {
  const { nombre, imagen, precio } = req.body;

  //chequea si la comida esta//
  const isInProducts = await Product.findOne({ nombre });

  //valida que los campos no esten vacios//
  const notEmpty = nombre !== "" && imagen !== "" && precio !== "";

  //chequea si el pedido ya esta en el carrito//
  const isInCart = await Cart.findOne({ nombre });

  //si no existe//
  if (!isInProducts) {
    res.status(400).json({ mensaje: "el producto no esta agregado" });
    //si exsite y no esta en el carrito lo agrega//
  } else if (notEmpty && !isInCart) {
    newFoodInCart = new Cart({ nombre, imagen, precio, cantidad: 1 });
    await Product.findByIdAndUpdate(
      isInProducts?.id,
      { agregado: true, nombre, imagen, precio },
      { new: true }
    )
      .then((product) => {
        newFoodInCart.save();
        res.json({ mensaje: "producto agregado al carrito", product });
      })
      .catch((error) => console.log(error));
  } else if (isInCart) {
    res
      .status(400)
      .json({ mensaje: "el producto ya esta agregado al carrito" });
  }
};

//suma o quita pedidos//
const putProduct = async (req, res) => {
  const { productId } = req.params;
  const { query } = req.query;
  const body = req.body;

  /* Buscamos el producto en el carrito */
  const productBuscado = await Cart.findById(productId);

  /* Si no hay query 'add' o 'del' */
  if (!query) {
    res.status(404).json({ mensaje: "Debes enviar una query" });

    /* Si esta el producto en el carrito y quiero agregar */
  } else if (productBuscado && query === "add") {
    body.cantidad = body.cantidad + 1;

    await Cart.findByIdAndUpdate(productId, body, {
      new: true,
    }).then((product) => {
      res.json({
        mensaje: `El producto: ${product.nombre} fue actualizado`,
        product,
      });
    });

    /* Si esta el producto en el carrito y quiero sacar */
  } else if (productBuscado && query === "del") {
    body.cantidad = body.cantidad - 1;

    await Cart.findByIdAndUpdate(productId, body, {
      new: true,
    }).then((product) =>
      res.json({
        mensaje: `El producto: ${product.nombre} fue actualizado`,
        product,
      })
    );
  } else {
    res.status(400).json({ mensaje: "Ocurrio un error" });
  }
};

//borra el pedido del carrito//
const deleteProduct = async (req, res) => {
  const { productId } = req.params;

  /* Buscamos el producto en el carrito */
  const productInCart = await Cart.findById(productId);

  /* Buscamos el producto en nuestra DB por el nombre del que esta en el carrito */
  const { nombre, imagen, precio, _id } = await Product.findOne({
    nombre: productInCart.nombre,
  });

  /* Buscamos y eliminamos el producto con la id */
  await Cart.findByIdAndDelete(productId);

  /* Buscamos y editamos la prop inCart: false */
  /* Le pasamos la id del producto en la DB */
  /* La prop a cambiar y las demas */
  /* Y el new para devolver el producto editado */
  await Product.findByIdAndUpdate(
    _id,
    { agregado: false, nombre, imagen, precio },
    { new: true }
  )
    .then((product) => {
      res.json({
        mensaje: `El producto ${product.nombre} fue eliminado del carrito`,
      });
    })
    .catch((error) => res.json({ mensaje: "Hubo un error" }));
};

module.exports = {
  getProductsinCart,
  putProduct,
  deleteProduct,
  addFoodToCart,
};

import { createContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  /* crea estado para el carrito */
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const url = "http://localhost:3002/foods";
  const url2 = "http://localhost:3002/products-cart";

  const getProducts = async () => {
    const res = await axios.get(url);
    setProducts(res.data);
    console.log(res);
  };

  const getProductsCart = async () => {
    const response = await axios.get(url2);
    setCartItems(response.data);
    console.log(response);
  };

  useEffect(() => {
    getProducts();
    getProductsCart();
  }, []);

  const addItemToCart = async (product) => {
    const { nombre, imagen, precio } = product;

    await axios.post("http://localhost:3002/products-cart", {
      nombre,
      imagen,
      precio,
    });

    getProducts();
    getProductsCart();
  };

  const editItemToCart = async (id, query, cantidad) => {
    if (query === "del" && cantidad === 1) {
      await axios
        .delete(`http://localhost:3002/products-cart/${id}`)
        .then(({ data }) => console.log(data));
    } else {
      await axios
        .put(`http://localhost:3002/products-cart/${id}?query=${query}`, {
          cantidad,
        })
        .then(({ data }) => console.log(data));
    }

    getProducts();
    getProductsCart();
  };
  return (
    /* Envolvemos el children con el provider y le pasamos un objeto con las propiedades que necesitamos por value */
    <CartContext.Provider
      value={{ cartItems, products, editItemToCart, addItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

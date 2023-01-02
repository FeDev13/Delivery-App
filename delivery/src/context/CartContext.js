import { createContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  /* crea estado para el carrito */
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
};

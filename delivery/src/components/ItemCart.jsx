import React from "react";
import CartContext from "../context/CartContext";
import { useContext, useEffect, useState } from "react";

export const ItemCart = ({ item }) => {
  const { editItemToCart } = useContext(CartContext);

  /* Desestructuramos el item para sacar solo la id */
  const { cantidad } = item;
  return (
    <div>
      <img src={item.imagen} alt={item.nombre} />
      <div>
        <div>
          <p>{item.name}</p>
          <div>
            <button onClick={() => editItemToCart(item._id, "add", cantidad)}>
              AGREGAR
            </button>
            <button onClick={() => editItemToCart(item._id, "del", cantidad)}>
              SACAR
            </button>
          </div>
        </div>
        <div>
          <div>{item.cantidad}</div>
          <p>Total: ${item.cantidad * item.precio}</p>
        </div>
      </div>
    </div>
  );
};

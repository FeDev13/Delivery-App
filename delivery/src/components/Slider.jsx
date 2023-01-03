import React from "react";

import { useContext } from "react";
import { motion } from "framer-motion";
import CartContext from "../context/CartContext";

const Slider = () => {
  const { addItemToCart, products } = useContext(CartContext); //traigo todas las funciones y metodos del context del carrito

  return (
    //agregar rating al schema y filtrar
    <>
      {products &&
        products.map((item, index) => {
          return (
            <div
              className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-20 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
              key={index}
            >
              <div className="w-full flex items-center justify-between">
                <motion.div
                  className="w-40 h-40 -mt-8 drop-shadow-2xl"
                  whileHover={{ scale: 1.2 }}
                >
                  <img
                    src={item.imagen}
                    alt="imagen de producto"
                    className="w-full h-auto object-contain p-2 mr-6 rounded-full"
                  />
                </motion.div>
              </div>
              <br />
              <div className="w-full bg-orange-400 rounded-lg mt-10">
                <p className="text-center font-semibold text-base md:text-lg">
                  {item.nombre}
                </p>
              </div>
              <br />
              <div className="flex items-center gap-8">
                <p className="font-semibold text-decoration: underline decoration-2">
                  {" "}
                  $ {item.precio}
                </p>
              </div>
              {}
              {!item.inCart ? (
                <motion.div whileHover={{ scale: 1.2 }}>
                  <button
                    className="bg-orange-400 rounded-lg w-full py-2 font-semibold"
                    onClick={() => addItemToCart(item)}
                  >
                    Comprar
                  </button>
                </motion.div>
              ) : (
                <button>En el carrito</button>
              )}
            </div>
          );
        })}
    </>
  );
};

export default Slider;

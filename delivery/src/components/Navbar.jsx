import { motion } from "framer-motion";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import CartContext from "../context/CartContext";
import { useContext, useEffect, useState } from "react";
import ProfilePic from "../assets/avatar.png";
import Logo from "../assets/logo2.png";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";
import { ItemCart } from "./ItemCart";

export default function Navbar() {
  /*  const login = () => {}; */

  //* Creamos 2 estados, uno para ver si el carrito esta abierto o no y otro para obtener la cantidad de productos que tenemos en el carrito *//

  const [cartOpen, setCartOpen] = useState(false);
  const [productsLength, setProductsLength] = useState(0);

  //* Traemos del context los productos del carrito *//

  const { cartItems } = useContext(CartContext);

  //* Cada vez que se modifica el carrito, actualizamos la cantidad de productos *//

  useEffect(() => {
    setProductsLength(
      cartItems?.reduce((previous, current) => previous + current.cantidad, 0)
    );
  }, [cartItems]);

  //* Obtenemos el precio total *//

  const total = cartItems?.reduce(
    (previous, current) => previous + current.cantidad * current.precio,
    0
  );
  return (
    <>
      <header className="fixed z-40 w-screen p-3 px-4 md:p-6 md:px-16 bg-red-400">
        {/* desktop version */}
        <div className="hidden md:flex w-full h-full items-center justify-between">
          <div className="flex gap-2 items-center">
            <img
              src={Logo}
              className="object-cover w-20 h-20"
              alt="logo"
              style={{ marginTop: "-5rem", marginBottom: "-5rem" }}
            />
            <span className="text-headingColor text-2xl font-bold text-white">
              Fast & Foodious
            </span>
          </div>

          <div className="flex items-center gap-10">
            <motion.ul
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              className="flex items-center gap-10"
            >
              <NavLink to="/">
                <a className=" text-lg text-white" href="home">
                  Home
                </a>
              </NavLink>
            </motion.ul>
            <motion.ul
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              className="flex items-center gap-10"
            >
              <NavLink to="/restaurants">
                <a className=" text-lg text-white" href="home">
                  Menu
                </a>
              </NavLink>
            </motion.ul>

            {/* carrito */}
            <div
              className="relative flex items-center justify-center"
              onClick={() => setCartOpen(!cartOpen)}
            >
              {!cartOpen ? (
                <MdShoppingBasket className="text-textColor text-3xl  cursor-pointer" />
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.559099 0.559099C0.917199 0.201108 1.40282 0 1.90917 0C2.41553 0 2.90115 0.201108 3.25925 0.559099L10.0115 7.31138L16.7638 0.559099C17.124 0.211254 17.6063 0.0187787 18.107 0.0231296C18.6077 0.0274804 19.0866 0.228309 19.4407 0.582361C19.7947 0.936413 19.9956 1.41536 19.9999 1.91605C20.0043 2.41673 19.8118 2.8991 19.464 3.25925L12.7117 10.0115L19.464 16.7638C19.8118 17.124 20.0043 17.6063 19.9999 18.107C19.9956 18.6077 19.7947 19.0866 19.4407 19.4407C19.0866 19.7947 18.6077 19.9956 18.107 19.9999C17.6063 20.0043 17.124 19.8118 16.7638 19.464L10.0115 12.7117L3.25925 19.464C2.8991 19.8118 2.41673 20.0043 1.91605 19.9999C1.41536 19.9956 0.936413 19.7947 0.582361 19.4407C0.228309 19.0866 0.0274804 18.6077 0.0231296 18.107C0.0187787 17.6063 0.211254 17.124 0.559099 16.7638L7.31138 10.0115L0.559099 3.25925C0.201108 2.90115 0 2.41553 0 1.90917C0 1.40282 0.201108 0.917199 0.559099 0.559099Z"
                    fill="#F0F0F0"
                  />
                </svg>
              )}

              <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                {!cartOpen && (
                  <span className="text-xs text-black font-semibold">
                    {productsLength}
                  </span>
                )}
              </div>
              {cartItems && cartOpen && (
                <div className=" mx-2.5 rounded-2xl w-100 text-white bg-black">
                  <h2 className=" text-center">Tu pedido</h2>

                  {cartItems.length === 0 ? (
                    <p className="text-center mt-1.5 text-sm">
                      Tu carrito esta vacio
                    </p>
                  ) : (
                    <div className="max-h-52 overflow-y-scroll mt-1.5">
                      {cartItems.map((item, i) => (
                        <ItemCart key={i} item={item} />
                      ))}
                    </div>
                  )}

                  <h2 className="text-center font-bold mt-4 pb-8">
                    Total: ${total}
                  </h2>
                </div>
              )}
            </div>
            <Dropdown2 />
          </div>

          <div className="relative flex items-center justify-center">
            <NavLink to="/"></NavLink>
          </div>
        </div>

        {/* mobile */}
        <div className="flex items-center justify-between md:hidden w-full h-full ">
          <NavLink to="/home" className="flex items-center gap-2">
            <img src={Logo} className="w-8  object-cover" alt="logo" />
            <p className="text-headingColor text-xl font-bold">
              {" "}
              Fast & Foodious
            </p>
          </NavLink>
          <Dropdown />
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
          </div>
        </div>
      </header>
    </>
  );
}

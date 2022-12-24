import React from "react";
import Imagen from "../assets/imagen.png";
import Delivery from "../assets/delivery.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section
        className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-40 w-full h-auto"
        id="home"
      >
        <div className="py-2 flex-1 flex flex-col items-start justify-center md:items-center">
          <div className="flex items-center gap-2 justify-center bg-orange-200 p-2 rounded-full mr-auto -mt-60">
            <p className="font-semibold">Delivery en 5 min</p>
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src={Delivery}
                alt="imagen"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <p className="text-5xl font-bold my-8 tracking-widest">
            LLEGO A LA CIUDAD EL DELIVERY QUE ESPERABAS!
          </p>
          <NavLink to="/restaurants">
            <button
              type="button"
              className="bg-red-400 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 font-bold mr-auto text-gray-50 mt-16"
            >
              Hace tu pedido{" "}
              <span className=" font-bold text-lg underline">AHORA!</span>
            </button>
          </NavLink>
        </div>
        <div className="py-2 flex-1">
          <div className="w-full flex items-center justify-center relative mb-8">
            <img className="rounded-3xl w-8/12" src={Imagen} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

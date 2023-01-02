import React from "react";
import { icons } from "./icons";
import Accord from "./Accordion";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Restaurants = () => {
  const url = "http://localhost:3002/restaurants";
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(url);
    setData(res.data);
    console.log(res);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-40 w-full h-auto">
      <div className="w-1/2">
        <div className="grid grid-rows-3 grid-flow-col">
          {icons.map((icon, index) => {
            return (
              <div>
                <img
                  className="w-10 h-auto"
                  src={icon.image}
                  alt=""
                  key={index}
                />
                <p> {icon.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-white py-2 flex-1 flex flex-col items-start justify-center md:items-center">
        <input
          className="rounded-md border-gray-900 w-full"
          type="text"
          placeholder="buscar..."
        />
        {data.map((item, index) => {
          //trae restaurants, los mapea y por cada uno usa la variable nombre (${}) del hook para que cada link navegue hacia la ruta que le corresponde, en este caso la ruta se va a ver con la propiedad nombre del objeto item que viene del mapeo
          return (
            <NavLink to={`/restaurants/${item.nombre}`}>
              <div
                className=" bg-slate-100 rounded-lg w-full flex flex-col items-center mt-10 mx-10"
                key={index}
              >
                <div className=" flex flex-row p-3">
                  <div>
                    {" "}
                    <img className="items-center p-5" src={item.logo} alt="" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <p className="p-2 text-xl">{item.nombre}</p>
                    </div>
                    <div className="flex flex-col">
                      <span className=" font-thin text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                          />
                        </svg>
                        Acepta pago online
                      </span>
                    </div>
                    <div className="flex items-center mt-4">
                      <span>10-25 min</span>
                      <span className="mx-2">-</span>
                      <span>Envio $150</span>
                    </div>
                    <div className=" relative block">
                      <span className=" font-thin text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="gold"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                      </span>
                      <p className="p-3">{item.rating}</p>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
      <div className="bg-white py-2  flex-col justify-center md:items-center ml-20">
        <Accord />
      </div>
    </section>
  );
};

export default Restaurants;

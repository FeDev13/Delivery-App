import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Delivery from "../assets/delivery.png";
import Test from "./Test";

const McDonalds = () => {
  const { nombre } = useParams();
  const url = `http://localhost:3002/restaurants/${nombre}`; //setea la variable nombre para usar el hook

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
    <>
      <div>
        {data.map((item, index) => {
          return (
            <div
              className=" w-full bg-cover h-96 bg-center py-0 relative"
              key={index}
            >
              <img
                src="https://images.deliveryhero.io/image/pedidosya/profile-headers/partners-tasty-header.jpg?quality=70&width=1280&webp=1"
                alt=""
                className="w-full h-1/2 py-0 object-cover absolute mix-blend-overlay"
              />
              <div className=" w-1/2 py-8 ml-10">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={Delivery}
                    alt="imagen"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h1 className="text-white font-bold text-3xl mt-8">
                  {item.nombre}
                </h1>
                <div className="flex items-center mt-4 text-white">
                  <span>10-25 min</span>
                  <span className="mx-2">-</span>
                  <span>Envio $150</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Test />
    </>
  );
};

export default McDonalds;

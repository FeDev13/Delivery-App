import axios from "axios";
import { useState, useEffect } from "react";

import React from "react";

const Test = () => {
  const url1 = `http://localhost:3002/restaurants/:nombre/mcproductos`; //usa la propiedad nombre del modelo restaurants para hacer dinamica la ruta
  const [data, setData] = useState([]);
  const fetchMc = async () => {
    const resp = await axios.get(url1);
    setData(resp.data);
    console.log(resp);
  };

  useEffect(() => {
    fetchMc();
  }, []);

  return (
    <div>
      {data.map((food, index) => {
        return (
          <div
            className=" bg-slate-100 rounded-lg w-full flex flex-col items-center mt-10 mx-10"
            key={index}
          >
            <div className=" flex flex-row p-3">
              <div>
                {" "}
                <img className="items-center p-5" src={food.imagen} alt="" />
              </div>
              <div className="flex-1">
                <div className="flex items-center">
                  <p className="p-2 text-xl">{food.nombre}</p>
                </div>

                <div className=" relative block">
                  <p className="p-3">{food.categoria}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Test;

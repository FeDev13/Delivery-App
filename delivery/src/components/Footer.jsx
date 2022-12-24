import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white bg-red-400">
      <div>
        <h1 className="w-full text-3xl font-bold text-white">
          Fast and Foodious.
        </h1>
        <p className="py-4">
          Te arrpentiste de una compra? Boton de arrepentimiento.
          <br></br>
          Defensa de las y los Consumidores. Para reclamos ingresa aca.
          <br></br>
          Ley Nro 24.240 de Defensa del Consumidor. Ver contratos de adhesion
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <ul>
            <li className="py-2 text-sm">Quienes somos</li>
            <li className="py-2 text-sm">Terminos y condiciones</li>
            <li className="py-2 text-sm">Privacidad</li>
            <li className="py-2 text-sm">Se parte</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="py-2 text-sm">Top comidas</li>
            <li className="py-2 text-sm">Top productos</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="py-2 text-sm">Partners</li>
            <li className="py-2 text-sm">Promociona con nosotros</li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;

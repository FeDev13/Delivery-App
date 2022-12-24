import React from "react";
import Home from "./Home";
import Slider from "./Slider";

const MainContainer = () => {
  return (
    <div className="flex w-full h-auto flex-col items-center justify-center">
      <Home />

      <section className="w-full  flex my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize">Los mas pedidos</p>
          <Slider />
        </div>
      </section>
    </div>
  );
};

export default MainContainer;

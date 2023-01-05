import React from "react";
import Home from "./Home";
import Slider from "./Slider";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";

const MainContainer = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          "http://localhost:3002",
          {},
          {
            withCredentials: true,
          }
        );
        if (!data.status) {
          removeCookie("jwt");
          navigate("/login");
        } else
          toast(`Bienvenido ${data.user} 🚀`, {
            theme: "dark",
          });
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);
  return (
    <div className="flex w-full h-auto flex-col items-center justify-center">
      <Home />
      <section className="w-full  flex my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize">Los mas pedidos</p>
          <Slider />
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default MainContainer;

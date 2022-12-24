import React from "react";

const Login = () => {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-lg shadow-lg lg:max-w-xl">
        <div className="bg-red-400 w-full p-3 rounded-md">
          <h1 className="text-3xl font-semibold text-center text-black">
            Login
          </h1>
        </div>

        <form className="mt-6">
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Usuario
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="r" className="text-xs text-black hover:underline">
            Olvidaste tu password?
          </a>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-red-400">
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a href="r" className="font-medium text-red-400 hover:underline">
            Registrarse
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

import "./App.css";

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import CreateContainer from "./components/CreateContainer";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { Signup } from "./components/Signup";
import Restaurants from "./components/Restaurants";
import McHome from "./components/McHome";

function App() {
  const user = true;
  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Navbar user={user} />
        <main className="mt-14 md:mt-20 w-full">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<MainContainer />} />
            <Route path="/createitem" element={<CreateContainer />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/mcdonalds" element={<McHome />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;

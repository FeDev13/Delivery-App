import "./App.css";
import { CartProvider } from "./context/CartContext";
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
import McDonalds from "./components/McDonalds";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <CartProvider>
      <AnimatePresence>
        <div className="w-screen h-auto flex flex-col bg-primary">
          <Navbar />
          <main className="mt-14 md:mt-20 w-full">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<MainContainer />} />
              <Route path="/createitem" element={<CreateContainer />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/restaurants/:nombre" element={<McDonalds />} />
              <Route path="/restaurants" element={<Restaurants />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AnimatePresence>
    </CartProvider>
  );
}

export default App;

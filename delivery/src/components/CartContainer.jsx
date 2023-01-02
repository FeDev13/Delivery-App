import React from "react";
import { motion } from "framer-motion";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";

export const CartContainer = () => {
  return (
    <div className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]">
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }}>
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">Cart</p>
        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
        >
          Clear <RiRefreshFill />
        </motion.p>
      </div>

      {/*Total sum of cart */}
      <div className="w-full h-full bg-red-100 rounded-t-[2rem] flex flex-col">
        <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none"></div>
      </div>
      <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
        <div className="w-full flex items-center justify-between">
          <p className="text-gray-400 text-lg">Sub Total</p>
          <p className="text-gray-400 text-lg">$ </p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-gray-400 text-lg">Delivery</p>
          <p className="text-gray-400 text-lg">$ 2.5</p>
        </div>

        <div className="w-full border-b border-gray-600 my-2"></div>

        <div className="w-full flex items-center justify-between">
          <p className="text-gray-200 text-xl font-semibold">Total</p>
          <p className="text-gray-200 text-xl font-semibold">$</p>
        </div>
        <motion.button
          whileTap={{ scale: 0.8 }}
          type="button"
          className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
        >
          Check Out
        </motion.button>
      </div>
    </div>
  );
};

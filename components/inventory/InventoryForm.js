import React from "react";
import { BsDot } from "react-icons/bs";

const InventoryForm = () => {
  return (
    <div className="flex-1 h-80 bg-white">
      <form className="py-5 px-20">
        <div className="flex justify-between">
          <h5 className="text-[#17C7C0] font-bold">Update investory</h5>
          <div className="flex">
            <p className="text-gray-400 font-bold">3 pending</p>
            <BsDot color="#17C7C0" size={24} />
          </div>
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Amount sold"
            className="my-4 shadow appearance-none border w-full py-2 px-3 text-[#17C7C0] leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="text"
            placeholder="12/06//22"
            className="my-4 shadow appearance-none border w-full py-2 px-3 text-[#17C7C0] leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mt-5">
          <button className="bg-[#17C7C0] hover:bg-[#17C7d0] text-white font-bold py-2 px-4 rounded w-full">
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
};

export default InventoryForm;

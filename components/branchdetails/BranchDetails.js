import React from "react";
import { BsDot } from "react-icons/bs";
import InventoryForm from "../inventory/InventoryForm";

const BranchDetails = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center mx-10">
      <div className="flex-1 bg-white  mr-10 text-left py-5 px-10">
        <h5 className="text-[#17C7C0] font-bold">Notifications</h5>
        <div className="my-3">
          <p className="text-gray-400">
            0x234455567675 updated the inventory, 230 items were sold
          </p>
          <p className="text-right">2 hours ago.</p>
        </div>
        <div className="my-3">
          <p className="text-gray-400">
            0x234455567675 updated the inventory, 230 items were sold
          </p>
          <p className="text-right">2 hours ago.</p>
        </div>
        <div className="my-3">
          <p className="text-gray-400">
            0x234455567675 updated the inventory, 230 items were sold
          </p>
          <p className="text-right">2 hours ago.</p>
        </div>
        <div className="my-3">
          <p className="text-gray-400">
            0x234455567675 updated the inventory, 230 items were sold
          </p>
          <p className="text-right">2 hours ago.</p>
        </div>
      </div>

      <InventoryForm />
    </div>
  );
};

export default BranchDetails;

import React, { useContext } from "react";
import { BsDot } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { UserContext } from "../../context/StateContext";
import InventoryForm from "../inventory/InventoryForm";

const SuperAdmin = () => {
  const { edit, setEdit } = useContext(UserContext);

  const handleEdit = () => {
    setEdit(true);
  };

  return (
    <div className="flex align-center justify-around w-52 my-5 sm:my-0">
      <div className="flex align-center">
        <BsDot color="red" size={24} />
        <p>Superadmin</p>
      </div>

      <div
        className="flex cursor-pointer items-center justify-evenly w-16"
        onClick={handleEdit}
      >
        <p>Edit</p>
        <FaEdit color="#17C7C0" size={18} />
      </div>

      {edit ? (
        <div className="absolute left:1/2 top:3.5 sm:left-3/4 sm:top-20 z-40">
          <InventoryForm />
        </div>
      ) : null}
    </div>
  );
};

export default SuperAdmin;

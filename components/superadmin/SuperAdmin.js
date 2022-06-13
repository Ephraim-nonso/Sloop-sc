import React from "react";
import { BsDot } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

const SuperAdmin = () => {
  return (
    <div className="flex align-center justify-around w-52 my-5 sm:my-0">
      <div className="flex align-center">
        <BsDot color="red" size={24} />
        <p>Superadmin</p>
      </div>

      <div className="flex cursor-pointer items-center justify-evenly w-16">
        <p>Edit</p>
        <FaEdit color="#17C7C0" size={18} />
      </div>
    </div>
  );
};

export default SuperAdmin;

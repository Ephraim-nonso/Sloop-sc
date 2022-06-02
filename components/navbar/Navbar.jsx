import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between px-10">
      <h1 className="text-3xl text-[#181350] font-bold">Sloop</h1>
      <ConnectButton />
    </div>
  );
};

export default Navbar;

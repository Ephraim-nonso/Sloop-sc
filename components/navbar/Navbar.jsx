import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between px-10">
      <Link href="/">
        <h1 className="text-3xl text-[#181350] font-bold">Sloop</h1>
      </Link>
      <ConnectButton />
    </div>
  );
};

export default Navbar;

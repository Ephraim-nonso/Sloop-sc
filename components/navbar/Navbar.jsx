import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import SuperAdmin from "../superadmin/SuperAdmin";
import { UserContext, superAdmin } from "../../context/StateContext";
import { useAccount } from "wagmi";
import BranchAdmin from "../branchadmin/BranchAdmin";

const Navbar = () => {
  const { login, setLogin } = useContext(UserContext);

  const { data } = useAccount();

  return (
    <div className="flex flex-col sm:flex-row justify-between px-10">
      <Link href="/">
        <h1
          className="text-3xl text-[#181350] font-bold cursor-pointer"
          onClick={() => {
            setLogin(false);
          }}
        >
          Sloop
        </h1>
      </Link>

      <div className="flex flex-col sm:flex-row items-center justify-center">
        {data?.address === superAdmin ? <SuperAdmin /> : null}
        {data?.address && data?.address !== superAdmin ? <BranchAdmin /> : null}
        <ConnectButton />
      </div>
    </div>
  );
};

export default Navbar;

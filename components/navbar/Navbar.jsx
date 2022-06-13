import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useContext } from "react";
import Link from "next/link";
import SuperAdmin from "../superadmin/SuperAdmin";
import { UserContext } from "../../context/StateContext";

const Navbar = () => {
  const { login, setLogin } = useContext(UserContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between px-10">
      <Link href="/">
        <h1
          className="text-3xl text-[#181350] font-bold"
          onClick={() => {
            setLogin(false);
            console.log(login);
          }}
        >
          Sloop
        </h1>
      </Link>

      <div className="flex flex-col sm:flex-row items-center justify-center">
        {login ? <SuperAdmin /> : null}
        <ConnectButton />
      </div>
    </div>
  );
};

export default Navbar;

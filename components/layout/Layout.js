import React from "react";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="py-6 justify-center text-center bg-[#F4F6FE] h-screen">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;

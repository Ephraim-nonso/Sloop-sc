import React from "react";
import Head from "next/head";
import BranchDetails from "../components/branchdetails/BranchDetails";
import Top from "../components/top-section/Top";

const branch = () => {
  return (
    <div>
      <Head>
        <title>Sloop</title>
        <meta name="description" content="Track goods distribution." />
      </Head>

      <Top />
      <BranchDetails />
    </div>
  );
};

export default branch;

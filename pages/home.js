import Head from "next/head";

import Table from "../components/body/Table";
import Navbar from "../components/navbar/Navbar";
import Top from "../components/top-section/Top";

const Home = () => {
  return (
    <div className="py-6 justify-center text-center bg-[#F4F6FE] h-screen">
      <Head>
        <title>Sloop</title>
        <meta name="description" content="Track goods distribution." />
      </Head>
      <Top />
      <Table />
    </div>
  );
};

export default Home;

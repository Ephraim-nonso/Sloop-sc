import Head from "next/head";
import Signup from "../components/signup/Signup";

const Login = () => {
  return (
    <div>
      <Head>
        <title>Sloop</title>
        <meta name="description" content="Track goods distribution." />
      </Head>
      <Signup />
    </div>
  );
};

export default Login;

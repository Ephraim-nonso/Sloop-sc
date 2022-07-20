import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import one from "../../assets/Group3.png";
import two from "../../assets/Group4.png";
import three from "../../assets/Group5.png";
import four from "../../assets/Group6.png";
import logo from "../../assets/Sloop.png";
import Link from "next/link";
import UAuth from "@uauth/js";
import { UserContext, superAdmin } from "../../context/StateContext";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

const uauth = new UAuth({
  clientID: "b4c73b63-70b0-43c2-8aa0-5d7519d1db84",
  redirectUri: "https://sloop-green.vercel.app/branch",
  scope: "openid wallet email:optional humanity_check:optional",
});

const Signup = () => {
  const { login, setLogin } = useContext(UserContext);
  const { data } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  // Variables declaration
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [userAddress, setUserAddress] = useState();

  // Login with a popup and save the user
  const handleLogin = async () => {
    setLoading(true);
    try {
      const userAuth = await uauth.loginWithPopup();

      if (userAuth.idToken.wallet_address) {
        setUserAddress(userAuth.idToken.wallet_address);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 sm:mt-32">
      <div className="block sm:flex">
        <div className="mr-0 sm:mr-20">
          <Image src={four} alt="computer" width={300} height={300} />
        </div>
        <div className="my-10 sm:mt-20">
          <Image src={logo} alt="logo" />
          <p className="mb-3">
            Your all in one place to track supplies, distribution and day to day
            activities
          </p>

          {data?.address || userAddress ? (
            <Link
              href={
                data?.address || userAddress === superAdmin
                  ? "/branch"
                  : "/home"
              }
            >
              <button
                className="bg-[#17C7C0] hover:bg-[#17C7d0] text-white font-bold py-2 px-4 rounded"
                onClick={() => setLogin(true)}
              >
                Go to dashboard
              </button>
            </Link>
          ) : null}

          {data?.address || userAddress ? null : (
            <button
              onClick={handleLogin}
              className="bg-[#DED207] hover:bg-[##DED247] text-white font-bold py-2 px-4 rounded my-4"
            >
              Login with UD
            </button>
          )}
        </div>
        <div className="ml-0 sm:ml-28">
          <Image src={three} alt="computer" width={300} height={300} />
        </div>
      </div>
      <div className="block sm:flex justify-between max-w-2xl ">
        <div>
          <Image src={one} alt="computer" width={150} height={150} />
        </div>
        <div>
          <Image src={two} alt="computer" width={150} height={150} />
        </div>
      </div>
    </div>
  );
};

export default Signup;

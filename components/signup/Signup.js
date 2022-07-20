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
  clientID: "67e3fa64-85d9-416b-97ac-20bb42e3833b",
  redirectUri: "https://sloop-green.vercel.app",
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
  const [user, setUser] = useState();

  useEffect(() => {
    setLoading(true);
    uauth
      .user()
      .then(setUser)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  //Login/out Functions
  const handleLogin = () => {
    setLoading(true);
    uauth
      .loginWithPopup()
      .then(() => uauth.user().then(setUser))
      .catch(setError)
      .finally(() => setLoading(false));
  };

  const handleLogout = () => {
    setLoading(true);
    uauth
      .logout()
      .then(() => setUser(undefined))
      .catch(setError)
      .finally(() => setLoading(false));
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

          {data?.address || user ? (
            <Link
              href={
                data?.address || user === superAdmin ? "/branch" : "/branch"
              }
            >
              <button
                className="bg-[#17C7C0] hover:bg-[#17C7d0] text-white font-bold py-2 px-4 rounded-lg"
                onClick={() => setLogin(true)}
              >
                Go to dashboard
              </button>
            </Link>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-[#DED207] hover:bg-[##DED247] text-white font-bold py-2 px-4 rounded-lg my-4"
            >
              Login with UD
            </button>
          )}
          <div>
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-[#07de07] hover:bg-[##DED247] text-white font-bold py-2 px-4 rounded-lg my-4 ml-2"
              >
                Logout UD
              </button>
            ) : (
              ""
            )}
          </div>
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

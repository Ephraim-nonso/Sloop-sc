import React from "react";
import { BsDot } from "react-icons/bs";
import { useContract, useAccount, useSigner, useProvider } from "wagmi";
import contractAbi from "../../utils/abi.json";
import { ethers, Contract } from "ethers";

const InventoryForm = () => {
  // Use wagmi hook to interact with contract.
  const provider = useProvider();
  const contract = useContract({
    addressOrName: "0x4F1B938E99f9e4826F7f4CD145360E89e45348e2",
    contractInterface: contractAbi,
    signerOrProvider: provider,
  });

  const handleUpdate = async (e) => {
    e.preventDefault();
    // console.log(provider);
    // console.log(contract);
    // contract.update();

    const myProvider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = myProvider.getSigner();
    const contractInstance = new Contract(
      "0x4F1B938E99f9e4826F7f4CD145360E89e45348e2",
      contractAbi,
      signer
    );

    console.log(contractInstance);

    const update = await contractInstance.headquaterUpdate("1", "2");
    console.log(update);
  };

  // Get data from wagmi hooks
  const { data } = useAccount();

  return (
    <div className="flex-1 h-80 bg-white">
      <form className="py-5 px-20">
        <div className="flex justify-between">
          <h5 className="text-[#17C7C0] font-bold">Update investory</h5>
          <div className="flex">
            <p className="text-gray-400 font-bold">3 pending</p>
            <BsDot color="#17C7C0" size={24} />
          </div>
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Amount sold"
            className="my-4 shadow appearance-none border w-full py-2 px-3 text-[#17C7C0] leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="text"
            placeholder="12/06//22"
            className="my-4 shadow appearance-none border w-full py-2 px-3 text-[#17C7C0] leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mt-5">
          <button
            className="bg-[#17C7C0] hover:bg-[#17C7d0] text-white font-bold py-2 px-4 rounded w-full"
            onClick={handleUpdate}
          >
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
};

export default InventoryForm;

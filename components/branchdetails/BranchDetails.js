import React from "react";
import { BsDot } from "react-icons/bs";
import contractAbi from "../../utils/abi.json";
import { ethers, Contract } from "ethers";
import { useContract, useAccount, useSigner, useProvider } from "wagmi";
import Select from "react-select";

const options = [
  { value: "minus", label: "Amount Sold" },
  { value: "add", label: "Amount Received" },
];

const BranchDetails = () => {
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

    const single = 1;
    const toBePaid = JSON.stringify(single);
    const costOfNFT = ethers.utils.parseEther(toBePaid);
    const single2 = 2;
    const toBePaid2 = JSON.stringify(single2);
    const costOfNFT2 = ethers.utils.parseEther(toBePaid2);

    const update = await contractInstance.update(
      ethers.utils.parseEther("1000"),
      2,
      {
        gasPrice: ethers.utils.parseEther("100", "gwei"),
        gasLimit: 1000000,
      }
    );
    console.log(update);
  };

  // Get data from wagmi hooks
  const { data } = useAccount();

  return (
    <div className="flex flex-col sm:flex-row justify-center mx-10">
      <div className="flex-1 bg-white  mr-10 text-left py-5 px-10">
        <h5 className="text-[#17C7C0] font-bold">Notifications</h5>
        <div className="my-3">
          <p className="text-gray-400">
            0x234455567675 updated the inventory, 230 items were sold
          </p>
          <p className="text-right">2 hours ago.</p>
        </div>
        <div className="my-3">
          <p className="text-gray-400">
            0x234455567675 updated the inventory, 230 items were sold
          </p>
          <p className="text-right">2 hours ago.</p>
        </div>
        <div className="my-3">
          <p className="text-gray-400">
            0x234455567675 updated the inventory, 230 items were sold
          </p>
          <p className="text-right">2 hours ago.</p>
        </div>
        <div className="my-3">
          <p className="text-gray-400">
            0x234455567675 updated the inventory, 230 items were sold
          </p>
          <p className="text-right">2 hours ago.</p>
        </div>
      </div>

      <div className="flex-1 h-80 bg-white">
        <form className="py-5 px-20">
          <div className="flex justify-between">
            <h5 className="text-[#17C7C0] font-bold">Update investory</h5>
            <div className="flex">
              <p className="text-gray-400 font-bold">3 pending</p>
              <BsDot color="#17C7C0" size={24} />
            </div>
          </div>

          <div className="py-3">
            <Select options={options} />
          </div>

          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Enter values..."
              className="my-4 shadow appearance-none border w-full py-2 px-3 text-[#17C7C0] leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              type="time"
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
    </div>
  );
};

export default BranchDetails;

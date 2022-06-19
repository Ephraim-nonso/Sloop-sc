import React, { useContext, useRef } from "react";
import { BsDot } from "react-icons/bs";
import { useContract, useAccount, useSigner, useProvider } from "wagmi";
import contractAbi from "../../utils/abi.json";
import { ethers, Contract } from "ethers";
import { UserContext } from "../../context/StateContext";

import Select from "react-select";

const options = [
  { value: "update", label: "Headquarter updates" },
  { value: "address", label: "Add Accredited Addresses" },
  { value: "add", label: "Add Office" },
];

const InventoryForm = () => {
  const { edit, setEdit } = useContext(UserContext);
  const selectEl = useRef(null);

  const handleEdit = () => {
    setEdit(false);
  };

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

    if (selectEl.current.props.value.value === "add") {
      // const addLocation = await contractInstance.addOffice();
      console.log("Hello");
    } else if (selectEl.current.props.value.value === "address") {
      const addAddress = await contractInstance.addAccreditedAddress(
        "0x71bE63f3384f5fb98995898A86B02Fb2426c5788",
        1
      );
      console.log(await addAddress.wait());
    } else {
      const update = await contractInstance.headquaterUpdate(1, 2, {
        gasPrice: ethers.utils.parseEther("100", "gwei"),
        gasLimit: 1000000,
      });
      console.log(update);
    }

    console.log(contractInstance);
  };

  // Get data from wagmi hooks
  const { data } = useAccount();

  const onButtonClick = (e) => {
    e.preventDefault();
    // `current` points to the mounted text input element
    console.log(selectEl.current.props.value.value);
  };

  return (
    <div className="flex-1 h-96 bg-white border-2 border-solid">
      <form className="py-5 px-20">
        <div className="flex justify-between">
          <h5 className="text-[#17C7C0] font-bold">Update investory</h5>
          <div className="flex">
            <p className="text-gray-400 font-bold">3 pending</p>
            <BsDot color="#17C7C0" size={24} />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="py-3">
            <Select options={options} ref={selectEl} />
          </div>

          <input
            type="text"
            placeholder="Enter values..."
            className="my-4 shadow appearance-none border w-full py-2 px-3 text-[#17C7C0] leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="date"
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

      <p
        className="bg-transparent text-[#17C7C0] font-bold cursor-pointer"
        onClick={handleEdit}
      >
        Close
      </p>
    </div>
  );
};

export default InventoryForm;

import React from "react";
import NFTCard from "../Cards/NFTCard";

const drones = [
  // Assuming you have a data matrix for the drones
  {
    id: "6542",
    rate: "1X",
    retrieved: "623",
    image: <img className="rounded-xl" src="/sei_nft.jpg" />,
  },
  {
    id: "4632",
    rate: "1.5X",
    retrieved: "623",
    image: <img className="rounded-xl" src="/sei_nft.jpg" />,
  },
  {
    id: "2364",
    rate: "2X",
    retrieved: "623",
    image: <img className="rounded-xl" src="/sei_nft.jpg" />,
  },
  // ...other drones
];

const TerminalBody = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-10">
        <p className="text-3xl mb-2">Stake your YūhiSei NFT</p>
        <p>
          Earn points for staking your YūhiSei nft. Spend points on rewards!
        </p>
      </div>
      <div className="bg-gray-800 px-4 py-6 text-white rounded-lg">
        <section className="my-4">
          <div className="flex justify-center items-center mb-6">
            <h2 className="text-lg font-bold">YOUR STACKED YūhiSei : </h2>
          </div>
          <div className="flex justify-between items-center mx-2 mb-8">
            <div>
              <button className="text-black bg-white rounded-xl px-10 py-2 mr-5 hover:bg-[#a5a5a5] active:bg-[#cfcfcf]">
                <p>Stake</p>
              </button>
              <button className="bg-gray-700 border-gray-700 border-2 bg-opacity-40 rounded-xl px-10 py-2 mr-5 hover:bg-gray-600 active:bg-gray-500">
                <p>Unstake</p>
              </button>
            </div>
            <div className="flex justify-between items-center w-64">
              <div className="flex flex-col justify-center items-center">
                <p className="text-xl">3</p>
                <p className="text-lg">NFT Stacked</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-xl">123</p>
                <p className="text-lg">Total Points</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center my-10">
            <div className="border-b-2 border-white w-3/4" />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {drones.map((drone) => (
              <NFTCard key={drone.id} {...drone} />
            ))}
          </div>
        </section>
        {/* Other components from the Terminal Body section here */}
      </div>
    </div>
  );
};

export default TerminalBody;

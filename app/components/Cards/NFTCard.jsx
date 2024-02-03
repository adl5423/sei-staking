import React from "react";

const NFTCard = ({ id, rate, retrieved }) => {
  return (
    <div className="rounded-lg border border-gray-700 p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-md font-bold">DRONIE #{id}</h3>
        <span className="text-sm">{rate}</span>
      </div>
      <div className="mt-2">
        <p className="text-sm">Retrieved: {retrieved}</p>
      </div>
      {/* Otros elementos de la tarjeta aquí */}
    </div>
  );
};

export default NFTCard;

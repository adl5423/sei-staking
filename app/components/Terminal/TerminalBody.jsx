import React from "react";
import NFTCard from "../Cards/NFTCard";

const drones = [
  // Asumiendo que tienes una matriz de datos para los drones
  { id: "6542", rate: "1X", retrieved: "623" },
  { id: "4632", rate: "1.5X", retrieved: "623" },
  // ...otros drones
];

const TerminalBody = () => {
  return (
    <div className="bg-gray-900 p-4 text-white">
      <section className="my-4">
        <h2 className="text-lg font-bold">Deployed</h2>
        <div className="grid grid-cols-3 gap-4">
          {drones.map((drone) => (
            <NFTCard key={drone.id} {...drone} />
          ))}
        </div>
      </section>
      {/* Otros componentes de la sección TerminalBody aquí */}
    </div>
  );
};

export default TerminalBody;

import React from "react";

function TerminalHeader() {
  return (
    <div>
      <div className="flex justify-between items-center px-9">
        <div>
          <p className="text-xl">YūhiSei</p>
        </div>
        <div>
          <button className="text-black bg-white rounded-xl px-10 py-2 my-10 hover:bg-[#a5a5a5] active:bg-[#cfcfcf]">
            <p className="font-bold">Connect Wallet</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TerminalHeader;

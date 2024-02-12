"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  useCosmWasmClient,
  useSigningCosmWasmClient,
  useWallet,
  WalletConnectButton,
} from "@sei-js/react";

function TerminalHeader() {
  const { connectedWallet, accounts } = useWallet();

  return (
    <div>
      <div className="flex items-center justify-between px-9">
        <div>
          <p className="text-xl">YūhiSei</p>
        </div>
        <div>
          {/* <button className="text-black bg-white rounded-xl px-10 py-2 my-10 hover:bg-[#a5a5a5] active:bg-[#cfcfcf]">
            <p className="font-bold">Connect Wallet</p>
          </button> */}
          <WalletConnectButton />
        </div>
      </div>
    </div>
  );
}

export default TerminalHeader;

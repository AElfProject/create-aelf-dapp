import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ContractView } from "./component/contract-view/index";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContractView
      address="2vojXfVXL3iaKTwJue4sEa5fpbhcdrscDHw81SnCtCdWLu4JFs"
      rpcUrl="https://tdvw-test-node.aelf.io" // i.e = https://explorer-test-side02.aelf.io/chain
      contractName="Smart Contract"
    />
  </StrictMode>
);

// dev/index.tsx
import React from "react";
import ReactDOM from "react-dom";
import { ContractView } from "../src/component/contract-view";
import AElf from "aelf-sdk";

const App = () => {
  const aelfWallet = AElf.wallet.getWalletByPrivateKey("395644ebc31ef9e7f266a1cf23023beb66f7a298509f251e819d540a540cb89a");

  return (
    <main>
     <ContractView
        wallet={aelfWallet}
        address={"2vojXfVXL3iaKTwJue4sEa5fpbhcdrscDHw81SnCtCdWLu4JFs"}
        rpcUrl="https://tdvw-test-node.aelf.io"
        contractName={"contractViewerAddress"}
      />
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

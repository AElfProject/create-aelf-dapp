import React, { useMemo } from "react";
import { IWalletInfo } from "aelf-sdk/types/wallet";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import "./index.css";
import { IMethod } from "../../interfaces/index";
import DynamicForm from "../dynamic-form/index";

interface IReadWriteContractProps {
  readMethods: IMethod[];
  writeMethods: IMethod[];
  contract: any;
  wallet?: IWalletInfo;
  disabled: boolean;
}

enum TabKeys {
  READ_CONTRACT = "readContract",
  WRITE_CONTRACT = "writeContract",
}

const ReadWriteContract: React.FC<IReadWriteContractProps> = ({
  readMethods,
  writeMethods,
  contract,
  wallet,
  disabled,
}) => {
  const tabs = useMemo(
    () => [
      {
        key: TabKeys.READ_CONTRACT,
        label: "Read Contract",
        content: (
          <DynamicForm
            methods={readMethods}
            contract={contract}
            wallet={wallet}
            disabled={disabled}
          />
        ),
      },
      {
        key: TabKeys.WRITE_CONTRACT,
        label: "Write Contract",
        content: (
          <DynamicForm
            methods={writeMethods}
            contract={contract}
            wallet={wallet}
            disabled={disabled}
          />
        ),
      },
    ],
    [readMethods, writeMethods, contract, wallet, disabled]
  );

  return (
    <div className="contract-container">
      <div className="contract-pane-container">
        <Tabs aria-label="Contract Tabs">
          {tabs.map(({ key, label, content }) => (
            <Tab key={key} title={label}>
              <Card>
                <CardBody>{content}</CardBody>
              </Card>
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ReadWriteContract;

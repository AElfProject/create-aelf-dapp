import * as React from "react";
import { useMemo, useState } from "react";
import clsx from "clsx";
import { IWalletInfo } from "aelf-sdk/types/wallet";

import "./index.css";
import { IMethod } from "../../interfaces/index";
import DynamicForm from "../DynamicForm/index";

interface IReadWriteContractProps {
  readMethods: IMethod[];
  writeMethods: IMethod[];
  contract: any;
  wallet?: IWalletInfo;
  disabled: boolean;
}

enum ItemKey {
  READ_CONTRACT = "readContract",
  WRITE_CONTRACT = "writeContract",
}

const ContractTabHeader = ({
  items,
  activeKey,
  onTabChange,
}: {
  items: { key: ItemKey; label: string }[];
  activeKey: ItemKey;
  onTabChange: (key: ItemKey) => void;
}) => (
  <ul className="contract-button-container flex gap-[9px]">
    {items.map(({ key, label }) => (
      <li key={key} className="contract-button">
        <button
          type="button"
          className={clsx(
            "contract-button-link",
            activeKey === key && "active-button-link"
          )}
          onClick={() => onTabChange(key)}
        >
          <span>{label}</span>
        </button>
      </li>
    ))}
  </ul>
);

export default function ReadWriteContract({
  readMethods,
  writeMethods,
  contract,
  wallet,
  disabled,
}: IReadWriteContractProps) {
  const [activeKey, setActiveKey] = useState<ItemKey>(ItemKey.READ_CONTRACT);

  const items = useMemo(
    () => [
      {
        key: ItemKey.READ_CONTRACT,
        label: "Read Contract",
        children: (
          <DynamicForm
            methods={readMethods}
            contract={contract}
            wallet={wallet}
            disabled={disabled}
          />
        ),
      },
      {
        key: ItemKey.WRITE_CONTRACT,
        label: "Write Contract",
        children: (
          <DynamicForm
            methods={writeMethods}
            contract={contract}
            wallet={wallet}
            disabled={disabled}
          />
        ),
      },
    ],
    [contract, readMethods, writeMethods, wallet, disabled]
  );

  return (
    <div className="contract-container">
      <div className="pb-5">
        <ContractTabHeader
          items={items.map(({ key, label }) => ({ key, label }))}
          activeKey={activeKey}
          onTabChange={setActiveKey}
        />
      </div>
      <div className="contract-pane-container">
        {items.map(({ key, children }) => (
          <div
            className={clsx(
              "contract-pane",
              activeKey === key ? "block" : "hidden"
            )}
            key={key}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}

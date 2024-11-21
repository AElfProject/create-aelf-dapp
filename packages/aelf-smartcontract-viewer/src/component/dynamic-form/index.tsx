import * as React from "react";
import clsx from "clsx";
import { IWalletInfo } from "aelf-sdk/types/wallet";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { FormProvider } from "react-hook-form";

import FormItem from "./formItem";
import "./index.css";
import { getSecondHashValue } from "../../utilities/index";
import EPTooltip from "../ep-tooltip/index";
import { IMethod } from "../../interfaces/index";
import { RightIcon } from "../../assets/icons";

const DynamicForm = ({
  methods,
  contract,
  wallet,
  disabled,
}: {
  methods: IMethod[];
  contract: any;
  wallet?: IWalletInfo;
  disabled: boolean;
}) => {
  React.useEffect(() => {
    const hash = getSecondHashValue(window.location.href);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="contract-collapse-container pb-4">
      <div className="flex flex-col gap-4">
        {methods.map((item, index) => {
          return (
            <div key={item.name} id={item.name}>
              <Accordion
                variant="light"
                selectionMode="multiple"
                className={"accordion-container"}
              >
                <AccordionItem
                  key={item.name}
                  className={"accordion-item"}
                  aria-label={`Accordion ${index + 1}`}
                  title={
                    <div className="w-full truncate pr-1 label">
                      {index + 1}.
                      <EPTooltip
                        mode="dark"
                        placement="top"
                        content={item.name}
                      >
                        <span> {item.name}</span>
                      </EPTooltip>
                    </div>
                  }
                  // @ts-ignore
                  indicator={({ isOpen }: { isOpen: boolean }) => (
                    <RightIcon
                      className={clsx(
                        "arrow text-xs",
                        isOpen ? "rotate-180" : "rotate-0"
                      )}
                    />
                  )}
                >
                  {
                    // @ts-ignore
                    <FormProvider {...methods}>
                      <FormItem
                        wallet={wallet}
                        contract={contract}
                        type={item.type}
                        name={item.name}
                        input={item.input}
                        fn={item.fn}
                        disabled={disabled}
                      />
                    </FormProvider>
                  }
                </AccordionItem>
              </Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DynamicForm;

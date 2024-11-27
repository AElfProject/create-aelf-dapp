import React, { useCallback, useMemo, useState } from "react";
import clsx from "clsx";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Input,
} from "@nextui-org/react";

import "./index.css";
import { IInputItem } from "../../interfaces/index";
import { AddIcon, DownIcon } from "../../assets/icons";

interface ValueFormItemProps {
  data: IInputItem;
  setFieldValue: (key: string, value: string) => void;
  type: string;
  inputValue: string | number;
  disabled: boolean;
  props?: React.InputHTMLAttributes<HTMLInputElement>;
}

const ValueFormItem: React.FC<ValueFormItemProps> = ({
  data,
  inputValue,
  setFieldValue,
  type,
  disabled,
  props,
}) => {
  const [value, setValue] = useState<string>("");
  const [customValue, setCustomValue] = useState<string>("");
  const [customValueView, setCustomValueView] = useState<string>("");

  const validateAndSetCustomValue = (inputValue: string) => {
    const isValid = /^-?\d*(\.\d*)?$/.test(inputValue);
    if (isValid || inputValue === "" || inputValue === "-") {
      setCustomValue(inputValue);
    }
  };

  const handleCustomInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateAndSetCustomValue(e.target.value);
  };

  const handleCustomInputBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement> | React.FocusEvent<Element, Element>) => {
      const inputValue = (e.target as HTMLInputElement).value;
      if (!inputValue) return;

      const logNumber = parseInt(inputValue, 10);
      if (!isNaN(logNumber)) {
        setValue("1" + "0".repeat(logNumber));
        setCustomValueView(inputValue);
      }
    },
    []
  );

  const dropdownItems = useMemo(() => {
    const predefinedItems = [
      { max: "10", min: "8" },
      { max: "10", min: "12" },
      { max: "10", min: "16" },
      { max: "10", min: "18" },
      { max: "10", min: "20" },
    ];

    return [
      ...predefinedItems.map(({ max, min }) => ({
        key: `${max},${min}`,
        label: (
          <div className="menu-label">
            <span className="max">{max}</span>
            <span className="min">{min}</span>
          </div>
        ),
      })),
      {
        key: "input",
        label: (
          <div className="menu-label flex items-center gap-2">
            <span className="max">10 ^</span>
            <Input
              value={customValue}
              onChange={handleCustomInputChange}
              onBlur={handleCustomInputBlur}
              className="!h-5 w-[50px] py-0 mb-5 !text-xs !text-base-100 z-10"
              size="sm"
            />
          </div>
        ),
      },
    ];
  }, [customValue, handleCustomInputBlur]);

  const handleDropdownSelect = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const key = e.currentTarget.dataset.key;
      if (!key) return;

      const [, log] = key.split(",");
      const logNumber = parseInt(log, 10);

      if (!isNaN(logNumber)) {
        setValue("1" + "0".repeat(logNumber));
        setCustomValueView(log);
      }
    },
    []
  );

  const handleValueClick = () => {
    setFieldValue(data.name, value);
  };

  return (
    <>
      <div className="menu-container flex items-center gap-2">
        <span className="text-sm">
          {data.name} ({type})
        </span>
        {value && (
          <div
            className="show-count rounded bg-ECEEF2 px-2 cursor-pointer"
            onClick={handleValueClick}
          >
            <span className="max">10</span>
            <span className="min">{customValueView}</span>
          </div>
        )}
        <Dropdown>
          <DropdownTrigger>
            <div
              className={clsx(
                "cursor-pointer rounded bg-ECEEF2 leading-5",
                value ? "p-[6px]" : "p-1"
              )}
            >
              {!value ? <AddIcon /> : <DownIcon />}
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            {dropdownItems.map((item) => (
              <DropdownItem
                key={item.key}
                isReadOnly={item.key === "input"}
                data-key={item.key}
                onClick={handleDropdownSelect}
              >
                {item.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
      <Input
        type="text"
        radius="none"
        // @ts-ignore
        value={inputValue}
        // @ts-ignore
        size="sm"
        className="border-[1px] my-2"
        disabled={disabled}
        {...props}
      />
    </>
  );
};

export default ValueFormItem;

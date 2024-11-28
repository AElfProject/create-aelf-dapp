import React, { useState, useMemo, useEffect } from "react";
import { Divider, Input, Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { IWalletInfo } from "aelf-sdk/types/wallet";
import { JSONTree } from "react-json-tree";

import "./index.css";
import ValueFormItem from "./valueFormItem";
import ResponseDisplay from "./response";
import { IMethod, IInputItem } from "../../interfaces";

type FormItemProps = IMethod & {
  contract: any;
  wallet?: IWalletInfo;
  disabled: boolean;
};

const theme = {
  scheme: "monokai",
  author: "wimer hazenberg (http://www.monokai.nl)",
  base00: "transparent",
  base02: "#49483e",
  base03: "#75715e",
  base04: "#a59f85",
  base05: "#f8f8f2",
  base06: "#f5f4f1",
  base07: "#f9f8f5",
  base08: "#f92672",
  base09: "#000",
  base0A: "#f4bf75",
  base0B: "#000",
  base0C: "#a1efe4",
  base0D: "#f92672",
  base0E: "#ae81ff",
  base0F: "#cc6633",
};

const FormItem: React.FC<FormItemProps> = ({
  name,
  input,
  type,
  contract,
  wallet,
  disabled,
}) => {
  const { handleSubmit, control, watch, setValue } = useForm({});
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isSubmittable, setIsSubmittable] = useState(false);

  const values = watch();

  useEffect(() => {
    if (Object.values(values).every((item) => item || item === 0)) {
      setIsSubmittable(true);
    } else {
      setIsSubmittable(false);
    }
  }, [values]);

  const handleContractCall = async (data: any, isWrite: boolean) => {
    setLoading(true);
    console.log("isWrite", isWrite, (Object.keys(data).length && data) || {});
    try {
      const result = isWrite
        ? await contract[name](Object.keys(data).length && (data || {}))
        : await contract[name].call(Object.keys(data).length && (data || {}));
      console.log("result", result);
      setResponse(result || { data: null });
    } catch (e: any) {
      console.log("error", e);
      setResponse(e instanceof Error ? formatError(e) : e);
    } finally {
      setLoading(false);
    }
  };

  const formatError = (error: Error) => ({
    name: error.name,
    message: error.message,
    stack: error.stack,
  });

  const renderInputField = (ele: IInputItem) => {
    return (
      <div className="form-item" key={ele.name}>
        {ele.type === "int64" ? (
          <ValueFormItem
            data={ele}
            inputValue={values[ele.name]}
            type={ele.type}
            setFieldValue={setValue}
            disabled={disabled}
            props={{ ...control.register(ele.name) }}
          />
        ) : (
          <>
            <label className="text-sm">{ele.name}</label>
            <Input
              type="text"
              radius="none"
              size="sm"
              placeholder={`Enter ${ele.name}`}
              isDisabled={disabled}
              className="my-2"
              {...control.register(ele.name)}
            />
          </>
        )}
      </div>
    );
  };

  return (
    <>
      <form
        onSubmit={handleSubmit((data) =>
          handleContractCall(data, type === "write")
        )}
      >
        {input?.map(renderInputField)}

        <div className="flex w-full items-center">
          <SubmitButton
            type={type}
            isSubmittable={isSubmittable || input?.length === 0}
            loading={loading}
            disabled={disabled || (type === "write" && !wallet)}
          />
        </div>
      </form>

      {response && (
        <>
          <Divider className="mt-4" />
          <div>Response</div>
          <div className="response-box mt-2 overflow-x-auto">
            {ResponseDisplay({ response }) || (
              <JSONTree data={response} theme={theme} invertTheme={false} />
            )}
          </div>
        </>
      )}
    </>
  );
};

const SubmitButton: React.FC<{
  type: "read" | "write";
  isSubmittable: boolean;
  loading: boolean;
  disabled: boolean;
}> = ({ type, isSubmittable, loading, disabled }) => (
  <Button
    type="submit"
    radius="sm"
    size="sm"
    className="my-2 bg-link text-white"
    isDisabled={disabled || !isSubmittable}
    isLoading={loading}
  >
    {type === "read" ? "Query" : "Write"}
  </Button>
);

export default FormItem;

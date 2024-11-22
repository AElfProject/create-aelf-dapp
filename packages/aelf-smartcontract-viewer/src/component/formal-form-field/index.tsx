import React from "react";
import toast from "react-hot-toast";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Select,
  SelectItem,
  useDisclosure,
  Input,
  SharedSelection,
} from "@nextui-org/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
interface IOption {
  value: string;
  label: string;
}

interface IProps {
  options: IOption[];
  selectedItem: string;
  onOptionsChange: (list: IOption[]) => void;
  onSelectChange: (value: string) => void;
  title: string;
  buttonText: string;
  disabled: boolean;
}

const NormalFormItem = ({
  options,
  selectedItem,
  onOptionsChange,
  onSelectChange,
  title,
  buttonText,
  disabled,
}: IProps) => {
  const formSchema = z.object({
    address: z.string().min(1, { message: `${title} cannot be empty.` }),
    name: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
      name: "",
    },
  });
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleChange = (value: string) => {
    onSelectChange(value);
  };

  const handleClose = () => {
    onOpenChange();
    form.reset();
  };

  const onSubmit = (values: { address: string; name: string }) => {
    console.log(values);
    const newItem = {
      value: values.address,
      label: values.name || values.address,
    };
    if (options.map((ele) => ele.value).includes(newItem.value)) {
      toast.error("Already Exist");
    } else {
      onOptionsChange([...options, newItem]);
      onOpenChange();
    }
  };

  return (
    <div>
      <div className="flex w-full mb-2 justify-between items-center">
        <h2 className="text-lg font-semibold">{title}</h2>
        <Button
          radius="sm"
          size="sm"
          className="bg-blue-500 border-blue-500 text-white font-semibold"
          isDisabled={disabled}
          onClick={onOpen}
        >
          {buttonText}
        </Button>
      </div>
      <div className="flex w-full">
        <Select
          selectionMode="single"
          label={selectedItem}
          disallowEmptySelection={true}
          selectedKeys={selectedItem ? [selectedItem] : []}
          onSelectionChange={(key: SharedSelection) =>
            handleChange(key.currentKey as string)
          }
        >
          {options.map((opt) => (
            <SelectItem key={opt.value}>{opt.label}</SelectItem>
          ))}
        </Select>
        <Modal isOpen={isOpen} onOpenChange={handleClose}>
          <ModalContent>
            {(onClose: () => void) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Add {title}
                </ModalHeader>
                <ModalBody>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-8 modal-form"
                    >
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }: any) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                label={`${title}Address`}
                                placeholder={`Enter ${title} Address`}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-500 font-medium ml-2 mt-0" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }: any) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                label={`${title}name`}
                                placeholder={`Enter ${title} Name`}
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <ModalFooter className="pr-0">
                        <Button
                          color="danger"
                          variant="light"
                          onPress={onClose}
                        >
                          Cancel
                        </Button>
                        <Button type={"submit"} color="primary">
                          Add
                        </Button>
                      </ModalFooter>
                    </form>
                  </Form>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default NormalFormItem;

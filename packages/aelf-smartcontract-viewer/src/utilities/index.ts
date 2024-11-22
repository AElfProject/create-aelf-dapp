import AElf from "aelf-sdk";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const getAElf = (rpcUrl: string) => {
  return new AElf(new AElf.providers.HttpProvider(rpcUrl, 60000));
};

export const getSecondHashValue = (url: string) => {
  const urlObj = new URL(url);
  const hash = urlObj.hash.slice(1);
  const hashParts = hash.split("#");
  return hashParts[1];
};

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

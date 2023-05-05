import { Contract, Provider } from "starknet";
import abi_erc20 from "./abi_erc20";

export const provider = new Provider({
  sequencer: {
    network: "goerli-alpha",
  },
});

export const contract = new Contract(
  abi_erc20,
  "0x07394cbe418daa16e42b87ba67372d4ab4a5df0b05c6e554d158458ce245bc10"
);

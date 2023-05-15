import { connect } from "get-starknet";
import { contract } from "../lib/client";

export default function Connect({
  setAddress,
}: {
  setAddress: (val: string) => void;
}) {
  async function handleClick() {
    const starknet = await connect();

    if (starknet?.account) {
      setAddress(starknet.account.address);
      contract.connect(starknet.account);
      
    }

    // ^ use "get-starknet-core" for more low-level control
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Connect
      </button>
    </div>
  );
}

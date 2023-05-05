import { connect } from "get-starknet";
import { contract } from "../lib/client";

export default function Connect({
  setAddress,
}: {
  setAddress: (val: string) => void;
}) {
  async function handleClick() {
    const st = await connect();

    if (st?.account) {
      setAddress(st.account.address);
      contract.connect(st.account);
    }
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Connect
      </button>
    </div>
  );
}

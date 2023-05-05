import { FormEvent, useEffect, useState } from "react";
import { contract } from "../lib/client";
import { uint256 } from "starknet";
import { formatFixed, parseFixed } from "@ethersproject/bignumber";

const DECIMALS = 18;

export default function TokenForm({ address }: { address: string }) {
  const [balance, setBalance] = useState("");
  const [status, setStatus] = useState("");

  async function getBalance() {
    const bal = await contract.balanceOf(address);
    const asBN = uint256.uint256ToBN(bal.balance);
    const decimal = formatFixed(asBN.toString(), DECIMALS);

    setBalance(decimal);
  }

  async function send(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    setStatus("Loading...");

    try {
      const formData = new FormData(evt.currentTarget);
      const to = formData.get("to");
      const amount = formData.get("amount") as string;

      const amountFormatted = {
        type: "struct" as const,
        ...uint256.bnToUint256(parseFixed(amount, DECIMALS).toString()),
      };

      const tx = await contract.invoke("transfer", [to, amountFormatted]);
      //or: const tx = await contract.transfer(to, amountFormatted);

      setStatus(`Tx: ${tx.transaction_hash}`);
    } catch (err) {
      setStatus("Oh no!");
    }
  }

  useEffect(() => {
    getBalance();
  }, []);

  return (
    <div className="token-section">
      <h3>USDC (wink wink)</h3>
      <strong>Balance: {balance || "..."}</strong>
      <form onSubmit={send}>
        <input type="text" name="to" placeholder="Recipient" required />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          required
          step="any"
        />
        <button type="submit">Send</button>
      </form>
      <p>{status}</p>
    </div>
  );
}

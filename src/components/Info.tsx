import { GetBlockResponse } from "starknet";
import { provider } from "../lib/client";
import { useEffect, useState } from "react";

export default function Info() {
  const [block, setBlock] = useState<GetBlockResponse>();

  async function getInfo() {
    const block = await provider.getBlock(null); // <- Get latest block

    if (block) setBlock(block);
  }

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="info">
      <p>
        Current block: {block?.block_number}, {block?.transactions.length} txs
      </p>
    </div>
  );
}

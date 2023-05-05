import { useState } from "react";
import Connect from "./components/Connect";
import Info from "./components/Info";
import TokenForm from "./components/TokenForm";

function App() {
  const [address, setAddress] = useState("");

  return (
    <div className="App">
      <h1 className="title">Le starknet dapp</h1>

      {address ? (
        <div>
          <Info />
          <p>Hello, {address}</p>
          <TokenForm address={address} />
        </div>
      ) : (
        <Connect setAddress={setAddress} />
      )}
    </div>
  );
}

export default App;

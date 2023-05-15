import { useState } from "react";
import Connect from "./components/Connect";
import Info from "./components/Info";
import TokenForm from "./components/TokenForm";

function App() {
  const [address, setAddress] = useState("");

  return (
    <div className="App">
      <h1 className="title">Le simple starknet dapp</h1>

      {address ? (
        <div>
          <p>Hello, {address}</p>
          <TokenForm address={address} />
          <Info />
        </div>
      ) : (
        <Connect setAddress={setAddress} />
      )}
    </div>
  );
}

export default App;

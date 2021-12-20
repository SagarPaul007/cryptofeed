import React from "react";
import Navbar from "../components/Navbar";
import Cryptos from "../components/Cryptos";

const Cryptocurrencies = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "3rem" }}>
        <Cryptos simplified={false} />
      </div>
    </div>
  );
};

export default Cryptocurrencies;

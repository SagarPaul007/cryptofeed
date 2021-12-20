import React from "react";

// components
import Navbar from "../components/Navbar";
import GlobalStats from "../components/GlobalStats";
import Cryptos from "../components/Cryptos";
import News from "../components/News";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <GlobalStats />
      <Cryptos simplified={true} />
      <News simplified={true} />
    </div>
  );
};

export default Home;

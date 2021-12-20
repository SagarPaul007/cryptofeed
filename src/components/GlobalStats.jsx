import React, { useState, useEffect } from "react";
import axios from "axios";
import millify from "millify";

import api from "../config";

const GlobalStats = () => {
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/stats",
      headers: {
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": api().API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setStats(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="global-stats">
        <h1 className="stats-heading">Loading ...</h1>
      </div>
    );
  }

  return (
    <div className="global-stats">
      <h1 className="stats-heading">Global Crypto Stats</h1>
      <div className="stats">
        <div className="stats-item">
          <p>Total Cryptocurrencies</p>
          <h2>{stats?.data?.totalCoins}</h2>
        </div>
        <div className="stats-item">
          <p>Total Exchanges</p>
          <h2>{stats?.data?.totalExchanges}</h2>
        </div>
        <div className="stats-item">
          <p>Total Market Cap</p>
          <h2>${millify(stats?.data?.totalMarketCap)}</h2>
        </div>
        <div className="stats-item">
          <p>Total 24h Volume</p>
          <h2>${millify(stats?.data?.total24hVolume)}</h2>
        </div>
        <div className="stats-item">
          <p>Total Markets</p>
          <h2>{millify(stats?.data?.totalMarkets)}</h2>
        </div>
      </div>
    </div>
  );
};

export default GlobalStats;

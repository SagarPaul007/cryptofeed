import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Coin from "./Coin";

import api from "../config";

const Cryptos = ({ simplified }) => {
  const [cryptos, setCryptos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coins",
      headers: {
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": api().API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        let res = response.data.data.coins;
        res = simplified === true ? res.filter((item) => item.rank <= 10) : res;
        setCryptos(
          res.filter((item) =>
            item?.name.toLowerCase().includes(search.toLowerCase().trim())
          )
        );
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [simplified, search]);

  if (isLoading) {
    if (simplified) {
      return <></>;
    }
    return (
      <div className="cryptos-container">
        <h1 className="cryptos-heading">Loading ...</h1>
      </div>
    );
  }

  return (
    <div className="cryptos-container">
      {simplified && (
        <h1 className="cryptos-heading">Top 10 Cryptos In The World</h1>
      )}
      {!simplified && (
        <div className="header">
          <h1 className="cryptos-heading">Top Cryptos In The World</h1>
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            className="input"
            placeholder="Search Crypto ..."
          />
        </div>
      )}
      <div className="cryptos">
        {cryptos?.map((coin) => (
          <Coin coin={coin} key={coin.uuid} />
        ))}
      </div>
      {simplified && (
        <div className="more">
          <Link to="/cryptocurrencies" className="btn navbar-link">
            See More
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cryptos;

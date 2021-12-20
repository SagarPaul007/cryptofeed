import React from "react";
import { Link } from "react-router-dom";
import millify from "millify";

const Coin = ({ coin }) => {
  return (
    <Link to={`/cryptocurrencies/${coin.id}`} className="coin">
      <div className="coin-title">
        <h2>
          {coin.rank}. {coin.name}
        </h2>
        <img src={coin.iconUrl} alt="" />
      </div>
      <div className="coin-details">
        <h3>Price: {millify(coin?.price)}</h3>
        <h3>Market Cap: {millify(coin?.marketCap)}</h3>
        <h3>Daily Change: {coin.change}%</h3>
      </div>
    </Link>
  );
};

export default Coin;

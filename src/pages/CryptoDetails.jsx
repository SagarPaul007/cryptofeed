import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HtmlReactParser from "html-react-parser";
import axios from "axios";
import millify from "millify";

import Navbar from "../components/Navbar";
import LineChart from "../components/LineChart";

import linkIcon from "../images/link.png";

import api from "../config";

const CryptoDetails = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [chart, setChart] = useState(false);

  useEffect(() => {
    var options = {
      method: "GET",
      url: `https://coinranking1.p.rapidapi.com/coin/${id}`,
      headers: {
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": api().API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setCoin(response.data.data.coin);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [id]);

  if (isLoading) {
    return <h1 className="loading">Loading ...</h1>;
  }

  return (
    <div>
      <Navbar />
      <div className="crypto-details-container">
        {chart && (
          <div className="chart">
            <LineChart
              name={coin.name}
              coinPrice={coin.price}
              id={coin.id}
              chart={chart}
              setChart={setChart}
            />
          </div>
        )}
        <div className="crypto-heading">
          <div>
            <h1 className="crypto-title">
              {coin?.name}({coin?.symbol})
            </h1>
            <span onClick={() => setChart(!chart)} className="btn">
              Show Chart
            </span>
          </div>
          <img className="img" src={coin.iconUrl} alt={coin.name} />
        </div>

        <div className="crypto-details">
          <div className="item">
            <p>Rank</p>
            <h2>{coin.rank}</h2>
          </div>
          <div className="item">
            <p>Price</p>
            <h2>{millify(coin.price ? coin.price : 0)}</h2>
          </div>
          <div className="item">
            <p>Market Cap</p>
            <h2>{millify(coin.marketCap ? coin.marketCap : 0)}</h2>
          </div>
          <div className="item">
            <p>Total Supply</p>
            <h2>{millify(coin.totalSupply ? coin.totalSupply : 0)}</h2>
          </div>
          <div className="item">
            <p>Volume</p>
            <h2>{millify(coin.volume ? coin.volume : 0)}</h2>
          </div>
          <div className="item">
            <p>Number of Markets</p>
            <h2>{millify(coin.numberOfMarkets ? coin.numberOfMarkets : 0)}</h2>
          </div>
          <div className="item">
            <p>Number of Exchanges</p>
            <h2>
              {millify(coin.numberOfExchanges ? coin.numberOfExchanges : 0)}
            </h2>
          </div>
          <div className="item">
            <p>All-time-high(daily avg.)</p>
            <h2>
              {millify(
                parseInt(coin.allTimeHigh?.price ? coin.allTimeHigh?.price : 0)
              )}
            </h2>
          </div>
          <div className="item">
            <p>Circulating Supply</p>
            <h2>
              {millify(coin.circulatingSupply ? coin.circulatingSupply : 0)}
            </h2>
          </div>
        </div>

        <div className="crypto-description">
          <div className="description">
            <h2>What is {coin.name} ?</h2>
            {HtmlReactParser(coin.description)}
          </div>
          <div className="links">
            {coin.links?.map((link) => (
              <div key={link.name} className="link">
                <h3>{link.type}</h3>
                <a target="_blank" rel="noopener noreferrer" href={link.url}>
                  {link.name}
                  <img src={linkIcon} alt="" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;

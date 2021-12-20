import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import ExchangeItem from "../components/ExchangeItem";

import api from "../config";

const Exchange = () => {
  const [exchanges, setExchanges] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/exchanges",
      headers: {
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": api().API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setExchanges(response.data.data.exchanges);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="exchanges-container">
        <h1 className="loading">Loading ...</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="exchanges-container">
        <div className="exchanges-header">
          <p className="name">Name</p>
          <div className="exchanges-header-details">
            <p>Volume</p>
            <p>Markets</p>
            <p>Share</p>
            <p className="website">Website</p>
          </div>
        </div>
        <div className="exchanges">
          {exchanges.map((item) => (
            <ExchangeItem item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Exchange;

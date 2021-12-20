import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

import api from "../config";

const LineChart = ({ name, coinPrice, id, setChart, chart }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [timeframe, setTimeframe] = useState("24h");
  const [history, setHistory] = useState(null);

  useEffect(() => {
    var options = {
      method: "GET",
      url: `https://coinranking1.p.rapidapi.com/coin/${id}/history/${timeframe}`,
      headers: {
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": api().API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setHistory(response.data.data.history);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [timeframe, setTimeframe, id]);

  if (isLoading) {
    return (
      <>
        <h1 className="loading">Loading ...</h1>
      </>
    );
  }

  const price = [];
  const timestamp = [];

  for (let i = 0; i < history?.length; i++) {
    price.push(history[i].price);
    timestamp.push(new Date(history[i].timestamp).toLocaleDateString());
  }

  const data = {
    labels: timestamp,
    datasets: [
      {
        label: "Price in USD",
        data: price,
        fill: false,
        backgroundColor: "rgb(33,126,206)",
        borderColor: "rgb(33,126,206)",
      },
    ],
  };

  const options = {};

  const time = ["24h", "7d", "30d", "1y", "5y"];

  return (
    <div>
      <div className="chart-heading">
        <div>
          <h1 className="title">{name}</h1>
          <select
            onChange={(e) => setTimeframe(e.target.value)}
            name="Time Period"
          >
            {time.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <button onClick={() => setChart(!chart)} className="btn">
          X
        </button>
      </div>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;

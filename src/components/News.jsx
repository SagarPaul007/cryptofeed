import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import NewsItem from "./NewsItem";

import api from "../config";

const News = ({ simplified }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news/search",
      params: {
        q: "crypto",
        count: "100",
        freshness: "Day",
        textFormat: "Raw",
        safeSearch: "Off",
      },
      headers: {
        "x-bingapis-sdk": "true",
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key": api().API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        let res = response.data.value;
        res =
          simplified === true
            ? res.filter((item) => res.indexOf(item) < 3)
            : res;
        setNews(res);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [simplified]);

  if (isLoading) {
    if (simplified) {
      return <></>;
    }
    return (
      <div className="news-container">
        <h1 className="news-heading">Loading ...</h1>
      </div>
    );
  }

  return (
    <div className="news-container">
      {simplified && <h1 className="news-heading">Top 3 Crypto News</h1>}
      {!simplified && <h1 className="news-heading">Top Crypto News</h1>}
      <div className="news">
        {news?.map((item) => (
          <NewsItem news={item} key={item?.name} />
        ))}
      </div>
      {simplified && (
        <div className="more">
          <Link to="/news" className="btn navbar-link">
            See More
          </Link>
        </div>
      )}
    </div>
  );
};

export default News;

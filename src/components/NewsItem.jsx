import React from "react";

const NewsItem = ({ news }) => {
  return (
    <div className="news-item">
      <div className="news-title">
        <h2>{news.name}</h2>
        <img src={news.image?.thumbnail?.contentUrl} alt="" />
      </div>
      <p className="news-description">{news.description}</p>
      <div className="news-provider">
        <h3>~ {news.provider[0]?.name}</h3>
        <a target="_blank" rel="noreferrer" href={news.url}>
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;

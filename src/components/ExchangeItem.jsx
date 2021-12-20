import React, { useState } from "react";
import millify from "millify";
import HtmlReactParser from "html-react-parser";

const ExchangeItem = ({ item }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div onClick={() => setShowDetails(!showDetails)} className="item">
        <p className="name">
          {item.rank}. {item.name}
        </p>
        <div className="item-details">
          <p>{millify(item.volume)}</p>
          <p>{millify(item.numberOfMarkets)}</p>
          <p>{millify(item.marketShare)}%</p>
          <a className="website" href={item.websiteUrl}>
            {item.name ? item.name : "NIL"}
          </a>
        </div>
      </div>
      <div className={showDetails ? "exchange-details" : "hidden"}>
        {HtmlReactParser(item.description ? item.description : "")}
      </div>
    </>
  );
};

export default ExchangeItem;

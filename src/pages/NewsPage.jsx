import React from "react";
import Navbar from "../components/Navbar";
import News from "../components/News";

const NewsPage = () => {
  return (
    <div>
      <Navbar />
      <News simplified={false} />
    </div>
  );
};

export default NewsPage;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Home from "./pages/Home";
import About from "./pages/About";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import CryptoDetails from "./pages/CryptoDetails";
import NewsPage from "./pages/NewsPage";
import Exchange from "./pages/Exchange";

// styles
import "./styles/app.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/cryptocurrencies/:id" element={<CryptoDetails />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/exchange" element={<Exchange />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import { Link } from "react-router-dom";

import menu from "../images/menu.png";
import back from "../images/back.png";

const Navbar = () => {
  const [overlay, setOverlay] = useState(false);

  return (
    <nav>
      <div className="navbar">
        <Link className="navbar-link" to="/">
          <h2 className="logo">Cryptofeed</h2>
        </Link>
        <div className="menu">
          <Link className="navbar-link" to="/cryptocurrencies">
            <h3 className="cryptocurrencies">Cryptocurrencies</h3>
          </Link>
          <Link className="navbar-link" to="/news">
            <h3 className="news">News</h3>
          </Link>
          <Link className="navbar-link" to="/exchange">
            <h3 className="exchange">Exchanges</h3>
          </Link>
          <Link className="navbar-link" to="/about">
            <h3 className="about">About</h3>
          </Link>
        </div>
        <img
          onClick={() => setOverlay(!overlay)}
          className="menu-icon hidden"
          src={menu}
          alt=""
        />
      </div>
      {overlay && (
        <div className="menu-overlay">
          <div className="back">
            <img
              onClick={() => setOverlay(!overlay)}
              src={back}
              alt=""
              className="back"
            />
          </div>
          <Link className="navbar-link" to="/">
            <h3 className="home">Home</h3>
          </Link>
          <Link className="navbar-link" to="/cryptocurrencies">
            <h3 className="cryptocurrencies">Cryptocurrencies</h3>
          </Link>
          <Link className="navbar-link" to="/news">
            <h3 className="news">News</h3>
          </Link>
          <Link className="navbar-link" to="/exchange">
            <h3 className="exchange">Exchanges</h3>
          </Link>
          <Link className="navbar-link" to="/about">
            <h3 className="about">About</h3>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from "react";

import Navbar from "../components/Navbar";
import me from "../images/me.png";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-section">
        <h1>
          Hi, I am{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://sagarpaul.netlify.app"
          >
            Sagar Paul
          </a>
          {"."}
        </h1>
        <p>a fullstack developer from India.</p>
        <img src={me} alt="" />
      </div>
    </>
  );
};

export default About;

import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../src/assets/me.png";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, eu sou</h5>
        <h1>Pietra Valentina</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="Eu" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;

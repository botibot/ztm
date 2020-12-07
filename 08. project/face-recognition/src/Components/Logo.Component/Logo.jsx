import React from "react";
import Tilty from "react-tilty";
import "./Logo.css";
import brain from "./neuron.png";

const Logo = () => {
  return (
    <div className="Container ma4 mt0">
      <Tilty scale={1.2} className="Tilt br2 shadow-2">
        <div className="pa3">
          <img style={{ paddingTop: "5px" }} alt="logo" src={brain} />
        </div>
      </Tilty>
    </div>
  );
};

export default Logo;

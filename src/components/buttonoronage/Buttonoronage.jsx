import React from "react";
import "./buttonoronage.css";

export default function Buttonoronage() {
  return (
    <div className="button-group">
      <button className="darkmatter-btn">
        Our Team
        <div
          className="darkmatter-particle"
          style={{ "--tx": "-20px", "--ty": "-15px", left: "25%", top: "25%" }}
        ></div>
        <div
          className="darkmatter-particle"
          style={{
            "--tx": "15px",
            "--ty": "-20px",
            left: "75%",
            top: "25%",
            animationDelay: "0.2s",
          }}
        ></div>
        <div
          className="darkmatter-particle"
          style={{
            "--tx": "-15px",
            "--ty": "15px",
            left: "25%",
            top: "75%",
            animationDelay: "0.4s",
          }}
        ></div>
        <div
          className="darkmatter-particle"
          style={{
            "--tx": "20px",
            "--ty": "15px",
            left: "75%",
            top: "75%",
            animationDelay: "0.6s",
          }}
        ></div>
      </button>
    </div>
  );
}

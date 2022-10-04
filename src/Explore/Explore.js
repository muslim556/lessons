import React from "react";
import { useState } from "react";
import "./Explore.css";
import img from "./Vector 4.svg";

export function Explore() {
  const [open, setOpen] = useState(false);

  function Opensmth() {
    setOpen(!open);
  }
  return (
    <>
      <div id="header">
        <button onClick={Opensmth} className="button">
          <img src={img} alt="" className={open ? "reverse btn" : "button"} />
        </button>
      </div>
      <div className={open ? "open card" : "card"}>
        <div id="mini_card"></div>
        <div id="mini_card"></div>
        <div id="mini_card"></div>
        <div id="mini_card"></div>
        <div id="mini_card"></div>
        <div id="mini_card"></div>
      </div>
    </>
  );
}

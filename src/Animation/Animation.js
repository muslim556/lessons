import React from "react";
import "./Animations.css";
export function Animation() {
  return (
    <div className="hero">
      <div className="static_txt">I'm a</div>
      <ul className="dynamic_txts">
        <li>
          <span>Freelancer</span>
        </li>
        <li>
          <span>Designer</span>
        </li>
        <li>
          <span>Frontend Developer</span>
        </li>
        <li>
          <span>Youtuber</span>
        </li>
      </ul>
    </div>
  );
}

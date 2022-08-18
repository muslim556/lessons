import React, { memo } from "react";
import { NavLink } from "react-router-dom";

export function Footer() {
  console.log("footer");
  return (
    <footer
      style={{
        width: "100%",
        height: "100px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        background: "#333",
        color: "#fff",
      }}
    >
      <NavLink to="/"  style={{
          textDecoration: "none",
          fontSize: "30px",
          color: "yellow",
        }}>Home</NavLink>
      <NavLink to="/about"  style={{
          textDecoration: "none",
          fontSize: "30px",
          color: "yellow",
        }}>About</NavLink>
    </footer>
  );
}

export default memo(Footer);

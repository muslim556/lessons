import React, { memo } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  console.log("navbar");
  return (
    <nav
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
      <NavLink
        to="/"
        style={{
          textDecoration: "none",
          fontSize: "30px",
          color: "yellow",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={{
          textDecoration: "none",
          fontSize: "30px",
          color: "yellow",
        }}
      >
        About
      </NavLink>
    </nav>
  );
}

export default  memo(Navbar);

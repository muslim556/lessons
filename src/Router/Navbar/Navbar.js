import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <header id="header">
      <nav>
        <NavLink to="/">BMW</NavLink>
        <NavLink to="/about">Mercedes-Benz</NavLink>
        <NavLink to="/blog">Rolls-Royce</NavLink>
        <NavLink to="/contact">Tesla</NavLink>
        <NavLink to="/LoginPage">Login</NavLink>
      </nav>
    </header>
  );
}

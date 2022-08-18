import React from "react";
import "./Router.css";
import { Todos } from "./Todos";
import { BMW } from "./BMW";
import { RollsRoyce } from "./Rolls_Royce";
import { Tesla } from "./Tesla";
import { Navbar } from "./Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./Notfound";

export function Router() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BMW />} />
        <Route path="/about" element={<Todos />} />
        <Route path="/blog" element={<RollsRoyce />} />
        <Route path="/contact" element={<Tesla />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

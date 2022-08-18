import React, { useState } from "react";
import "./Router.css";

export function BMW() {
  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 100px)",
        background: "green",
        fontSize: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        position: "absolute",
      }}
    ></div>
  );
}

import React, { useState, useContext } from "react";
import { usersContext } from "../App";
import { MainComp } from "./MainComp";
import "./UseContext.css";

export function Main() {
  const [toggle, setToggle] = useState(false);
  const user = useContext(usersContext);

  return (
    <div>
      <h1 style={toggle ? {} : { display: "none" }} id="text">
        {toggle}
      </h1>
      <MainComp userInfoData={user} setToggle={setToggle} />
    </div>
  );
}

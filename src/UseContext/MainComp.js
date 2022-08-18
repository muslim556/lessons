import React from "react";
import { Main } from "./UseContext";
import "./UseContext.css";

export function MainComp({ userInfoData, setToggle }) {
  return (
    <>
      {userInfoData.map((item) => {
        return (
          <div key={item.id} id="container">
            <div>
              <p>Name: {item.name}</p>
              <p>Surname: {item.surname}</p>
              <p>City: {item.city}</p>
            </div>
            <label>
              <button
                onClick={() => {
                  setToggle(item.name);
                }}
              >
                Details
              </button>
            </label>
          </div>
        );
      })}
    </>
  );
}

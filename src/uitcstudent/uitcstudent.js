import React from "react";
import { render } from "@testing-library/react";
import "../App.css"

export function ListStudents() {
  fetch("https://uitc.my-api.uz/students")
    .then((res) => res.json())
    .then((secondRes) => {
      console.log(secondRes);
      secondRes.map((item) => {
        render(
        <>
          <div id="data-cards">
            <img src={item.img} alt="" />
            <div id="text-card">
              <p>{item.surname}</p>
              <p>{item.name}</p>
              <p> {item.tel}</p>
              <p> {item.grup}</p>
            </div>
          </div>
        </>
      );
      });
    });
}

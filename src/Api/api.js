import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

export function ApiData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://uitc.my-api.uz/students")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.id} id="card">
            <div id="img-card">
              <img src={item.img} alt="" />
            </div>
            <div id="text-card">
              <p>{item.surname}</p>
              <p>{item.name}</p>
              <p>{item.tel}</p>
              <p>{item.grup}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

import React, { useState, useEffect } from "react";
import "./api.css";
import axios from "axios";

export function ApiData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
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
            <div id="data-card">
              <p id="text">Data</p>
              <p>{item.name}</p>
              <p>{item.surname}</p>
              <p>{item.username}</p>
              <p>{item.email}</p>
              <p>{item.website}</p>
              <p>{item.phone}</p>
            </div>
            <div id="address-card">
              <p id="text">Address</p>
              <p>{item.address.street}</p>
              <p>{item.address.suite}</p>
              <p>{item.address.city}</p>
              <p>{item.address.zipcode}</p>
            </div>
            <div id="geo-card">
              <p id="text">Geo</p>
              <p>{item.address.geo.lat}</p>
              <p>{item.address.geo.lng}</p>
            </div>
            <div id="company-card">
              <p id="text">Company</p>
              <p>{item.company.name}</p>
              <p>{item.company.catchPhrase}</p>
              <p>{item.company.bs}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

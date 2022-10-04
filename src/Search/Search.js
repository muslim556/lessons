import React, { useState } from "react";
import "./Search.css";
import Data from "./Data";

export function Search() {
  const [search, setSearch] = useState();
  console.log(search);
  return (
    <>
      <div id="search_card">
        <p>Search</p>
        <input
          type="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>
      <div id="cards_container">
        {Data.filter((item) => item.name.toLowerCase().indexOf(search) !== -1)
          .length === 0 && search !== ""
          ? "404"
          : Data.filter(
              (item) => item.name.toLowerCase().indexOf(search) !== -1
            ).length === 0 && search === ""
          ? Data.map((item, i) => (
              <div>
                <p>{i + 1}</p>
                <p>{item.name}</p>
                <p>{item.email}</p>
                <p>{item.phone}</p>
              </div>
            ))
          : Data.filter(
              (item) => item.name.toLowerCase().indexOf(search) !== -1
            ).map((item, i) => (
              <div>
                <p>{i + 1}</p>
                <p>{item.name}</p>
                <p>{item.email}</p>
                <p>{item.phone}</p>
              </div>
            ))}
      </div>
    </>
  );
}

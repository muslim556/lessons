import React from "react";
import list from "../Data";
import {Cards} from "./Card";

export function Amazon({ handleClick }) {
  return (
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

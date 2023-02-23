import Pagination from "@mui/material/Pagination";
import React from "react";

export function UseNavigate({ data }) {
  return (
    <div>
      {data.map((item) => {
        return <p>{item.title
        }</p>;
      })}
      <Pagination color="primary" />
    </div>
  );
}

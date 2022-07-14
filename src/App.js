import React from "react";
import "./App.css";
// import { ListStudents } from "./uitcstudent/uitcstudent";
import {ApiData} from "./Api/api"

export function App() {
  return (
    <React.StrictMode>
      {/* <ListStudents /> */}
      <ApiData/>
    </React.StrictMode>
  );
}

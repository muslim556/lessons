import React, { createContext } from "react";
import "./App.css";
import { Main } from "./UseContext/UseContext";
const usersContext = createContext();

export function App() {
  return (
    <>
      <usersContext.Provider value={userInfoData}>
        <Main />
      </usersContext.Provider>
    </>
  );
}

const userInfoData = [
  {
    id: 1,
    name: "John",
    surname: "Doe",
    age: "30",
    city: "New York",
  },
  {
    id: 2,
    name: "Jane",
    surname: "Doe",
    age: "25",
    city: "London",
  },
  {
    id: 3,
    name: "Jack",
    surname: "Doe",
    age: "20",
    city: "Paris",
  },
  {
    id: 4,
    name: "Jill",
    surname: "Doe",
    age: "35",
    city: "Berlin",
  },
  {
    id: 5,
    name: "Jana",
    surname: "Doe",
    age: "40",
    city: "Moscow",
  },
];

export { usersContext };

import React, { useState, useEffect } from "react";

const bands = [
  {
    id: 1,
    name: "Nightwish",
    mostpopular: 9,
    bestselling: 6,
    text: "sasas sasas",
    price: "10000$",
  },
  {
    id: 2,
    name: "Metallica",
    mostpopular: 10,
    bestselling: 4,
    text: "sasas sasas",
    price: "12000$",
  },
  {
    id: 3,
    name: "Nirvana",
    mostpopular: 3,
    bestselling: 3,
    text: "sasas sasas",
    price: "10300$",
  },
  {
    id: 4,
    name: "Nirvana",
    mostpopular: 3,
    bestselling: 3,
    text: "sasas sasas",
    price: "2000$",
  },
  {
    id: 5,
    name: "Nirvana",
    mostpopular: 3,
    bestselling: 5,
    text: "sasas sasas",
    price: "70000$",
  },
  {
    id: 6,
    name: "Nirvana",
    mostpopular: 3,
    bestselling: 2,
    text: "sasas sasas",
    price: "10800$",
  },
  {
    id: 7,
    name: "Nirvana",
    mostpopular: 3,
    bestselling: 1,
    text: "sasas sasas",
    price: "1600$",
  },
  {
    id: 8,
    name: "Nirvana",
    mostpopular: 9,
    bestselling: 3,
    text: "sasas sasas",
    price: "1700$",
  },
  {
    id: 9,
    name: "Nirvana",
    mostpopular: 10,
    bestselling: 3,
    text: "sasas sasas",
    price: "23000$",
  },
  {
    id: 10,
    name: "Nirvana",
    mostpopular: 8,
    bestselling: 3,
    text: "sasas sasas",
    price: "5200$",
  },
];

export function Sort() {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("mostpopular");
  const [sortType1, setSortType1] = useState("price");

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        mostpopular: "mostpopular",
        bestselling: "bestselling",
        price: "price",
      };
      const sortProperty = types[type];
      const sorted = [...bands].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  useEffect(() => {
    const sortArray1 = (type) => {
      const types = {
        mostpopular: "mostpopular",
        bestselling: "bestselling",
        price: "price",
      };
      const sortProperty = types[type];
      const sorted = [...bands]
        .sort((a, b) => a[sortProperty] - b[sortProperty])
        .reverse();
      setData(sorted);
    };

    sortArray1(sortType1);
  }, [sortType1]);
  

  return (
    <div className="App">
      <select onChange={(e) => setSortType(e.target.value)}>
        <option value="mostpopular">Most Popular</option>
        <option value="bestselling">Best Selling</option>
        <option value="price">price</option>
      </select>
      {data.map((band) => (
        <div key={band.id} style={{ margin: "30px" }}>
          <div>{`${band.name}`}</div>
          <div>{`${band.text}`}</div>
          <div>{` ${band.price}`}</div>
        </div>
      ))}
    </div>
  );
}

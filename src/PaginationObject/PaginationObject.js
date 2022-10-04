import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "./PaginationObject.css";

const Data = [
  {
    id: 1,
    name: "Product1",
    type: "card1",
  },
  {
    id: 2,
    name: "Product2",
    type: "card2",
  },
  {
    id: 3,
    name: "Product3",
    type: "card3",
  },
  {
    id: 4,
    name: "Product4",
    type: "card4",
  },
  {
    id: 5,
    name: "Product5",
    type: "card5",
  },
  {
    id: 6,
    name: "Product6",
    type: "card6",
  },
  {
    id: 7,
    name: "Product7",
    type: "card7",
  },
  {
    id: 8,
    name: "Product8",
    type: "card8",
  },
  {
    id: 9,
    name: "Product9",
    type: "card9",
  },
  {
    id: 10,
    name: "Product10",
    type: "card10",
  },
  {
    id: 11,
    name: "Product11",
    type: "card11",
  },
  {
    id: 12,
    name: "Product12",
    type: "card12",
  },
  {
    id: 13,
    name: "Product13",
    type: "card13",
  },
  {
    id: 14,
    name: "Product14",
    type: "card14",
  },
  {
    id: 15,
    name: "Product15",
    type: "card15",
  },
  {
    id: 16,
    name: "Product16",
    type: "card16",
  },
  {
    id: 17,
    name: "Product17",
    type: "card17",
  },
  {
    id: 18,
    name: "Product18",
    type: "card18",
  },
  {
    id: 19,
    name: "Product19",
    type: "card19",
  },
  {
    id: 20,
    name: "Product20",
    type: "card20",
  },
  {
    id: 21,
    name: "Product21",
    type: "card21",
  },
  {
    id: 22,
    name: "Product22",
    type: "card22",
  },
  {
    id: 23,
    name: "Product23",
    type: "card23",
  },
  {
    id: 24,
    name: "Product24",
    type: "card24",
  },
  {
    id: 25,
    name: "Product25",
    type: "card25",
  },
  {
    id: 26,
    name: "Product26",
    type: "card26",
  },
  {
    id: 27,
    name: "Product27",
    type: "card27",
  },
  {
    id: 28,
    name: "Product28",
    type: "card28",
  },
  {
    id: 29,
    name: "Product29",
    type: "card29",
  },
  {
    id: 30,
    name: "Product30",
    type: "card30",
  },
  {
    id: 31,
    name: "Product31",
    type: "card31",
  },
  {
    id: 32,
    name: "Product32",
    type: "card32",
  },
  {
    id: 33,
    name: "Product33",
    type: "card33",
  },
  {
    id: 34,
    name: "Product34",
    type: "card34",
  },
  {
    id: 35,
    name: "Product35",
    type: "card35",
  },
  {
    id: 36,
    name: "Product36",
    type: "card36",
  },
  {
    id: 37,
    name: "Product37",
    type: "card37",
  },
  {
    id: 38,
    name: "Product38",
    type: "card38",
  },
  {
    id: 39,
    name: "Product39",
    type: "card39",
  },
  {
    id: 40,
    name: "Product40",
    type: "card40",
  },
  {
    id: 41,
    name: "Product41",
    type: "card41",
  },
  {
    id: 42,
    name: "Product42",
    type: "card42",
  },
  {
    id: 43,
    name: "Product43",
    type: "card43",
  },
  {
    id: 44,
    name: "Product44",
    type: "card44",
  },
  {
    id: 45,
    name: "Product45",
    type: "card45",
  },
  {
    id: 46,
    name: "Product46",
    type: "card46",
  },
  {
    id: 47,
    name: "Product47",
    type: "card47",
  },
  {
    id: 48,
    name: "Product48",
    type: "card48",
  },
  {
    id: 49,
    name: "Product49",
    type: "card49",
  },
  {
    id: 50,
    name: "Product50",
    type: "card50",
  },
];

export function PaginationObject() {
  const [cards] = useState(Data);
  const [pageNUmber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNUmber * usersPerPage;

  const pageCount = Math.ceil(cards.length / usersPerPage);

  function changePage({ selected }) {
    setPageNumber(selected);
  }

  return (
    <>
      <div id="container">
        {cards.slice(pagesVisited, pagesVisited + usersPerPage).map((item) => {
          return (
            <div id="cards" key={item.id}>
              <p>{item.name}</p>
              <p> {item.type} </p>
            </div>
          );
        })}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination_btns"}
          previousLinkClassName={"previuos_btns"}
          nextLinkClassName={"next_btn"}
          disabledClassName={"pagination_disabled"}
          activeClassName={"pagination_active"}
        />
      </div>
    </>
  );
}

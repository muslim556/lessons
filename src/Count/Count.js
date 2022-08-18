import React, { useState } from "react";
import "./Count.css";
import img from "./favorite_border_black_24dp 2.svg";
import img1 from "./sVwCJQc90UI8g3XF5o_uUX6kQ5lttqBpBsfqDIhkJw70rC3z_NkmQkHrNr+CMlNVtlMdtWyAnWcp+IAMywDRGq6B+08tn28XryN5EzJkaFQvVC2U2sDcW92jtQiS4kKWg5KYA11_xl6rs1cbyLInGHgNk_dtuYuwthu2n1iu_8NYLxCCh_35B9f4AV0C_ZReJepRTY7i3eKcuqd3dmvxbs.png";

export function Count() {
  const [products, setProducts] = useState([
    {
      id: 0,
      name: "Shaftoli",
      price: 20,
      count: 0,
      img: img1,
      like: true,
      discount: 20,
    },
    {
      id: 1,
      name: "Pamidor",
      price: 7,
      count: 0,
      img: img1,
      like: true,
      discount: 9,
    },
    {
      id: 2,
      name: "Anjir",
      price: 30,
      count: 0,
      img: img1,
      like: true,
      discount: 80,
    },
    {
      id: 3,
      name: "Qulupnay",
      price: 32,
      count: 0,
      img: img1,
      like: true,
      discount: 33,
    },
    {
      id: 4,
      name: "Injir",
      price: 100,
      count: 0,
      img: img1,
      like: true,
      discount: 2,
    },
    {
      id: 5,
      name: "Nok",
      price: 56,
      count: 0,
      img: img1,
      like: true,
      discount: 42,
    },
    {
      id: 6,
      name: "Olma",
      price: 56,
      count: 0,
      img: img1,
      like: true,
      discount: 42,
    },
  ]);

  const minus = (id) => {
    setProducts((products) =>
      products.map((item) =>
        item.id === id
          ? { ...item, count: item.count > 0 ? item.count - 1 : 0 }
          : item
      )
    );
  };

  const plus = (id) => {
    setProducts((products) =>
      products.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  return (
    <>
      <div id="cards_container">
        {products.map((item, id) => {
          return (
            <div id="card" key={item.id}>
              <div id="discount_card">
                <p>{item.discount} %off</p>
                <button>
                  <img src={img} alt="" />
                </button>
              </div>
              <div id="img_card">
                <img src={item.img} alt="" />
              </div>
              <div id="price_card">
                <p>{item.name}</p>
                <p>
                  {item.price - (item.price / 100) * item.discount}
                  <s>{item.price}</s>
                </p>
              </div>
              <div id="btns_card">
                <button onClick={() => minus(item.id)}>-</button>
                <p>{item.count}</p>
                <button onClick={() => plus(item.id)}>+</button>
              </div>
            </div>
          );
        })}
      </div>

      <div id="overall_cotainer">
        <div id="overall_card">
          <p>
            Overall
            {"  "+
              (products.reduce((a, b) => a + b.count * b.price, 0) -
                products.reduce(
                  (a, b) => a + (b.price / 100) * b.discount * b.count,
                  0
                ))}$
          </p>
        </div>
      </div>
    </>
  );
}

import React from "react";
import "../Cart.css";
import cart from "./shopping-basket-Bold.svg";

export function Navbar({ setShow, size }) {
  return (
    <nav id="nav">
      <button className="my_shop" onClick={() => setShow(true)}>
        My Shoping
      </button>
      <div id="cart" onClick={() => setShow(false)}>
        <button>
          <img src={cart} alt="" />
        </button>
        <span>{size}</span>
      </div>
    </nav>
  );
}

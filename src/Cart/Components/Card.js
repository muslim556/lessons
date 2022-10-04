import React from "react";

export function Cards({ item, handleClick }) {
  const { title, author, price, img } = item;
  return (
    <div id="cards_container">
      <div id="cards">
        <div id="image_box">
          <img src={img} alt="" />
        </div>
        <div id="details">
          <p>{title}</p>
          <p>{author}</p>
          <p>Price - {price}Rs</p>
          <button onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

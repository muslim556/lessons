import React from 'react'
import "./CardHover.css"
import img from "./Keds Champion Sneakers 1.png"
import like from "./Vector.svg"
import cart from "./Group 88.svg"

export function CardHover() {
  return (
      <div id='card'>
          <figure id='img_card'>
              <img src={img} alt="" />
              <div id='hover_card'>
                  <div><img src={like} alt="" /></div>
                  <button>Add to cart <img src={cart} alt="" /></button>
              </div>
          </figure>
          <p>High heels ladies shoes</p>
          <p>₦ 10,000</p>
      </div>
  )
}

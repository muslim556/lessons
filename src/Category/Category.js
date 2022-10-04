import React from "react";
import "./Category.css";
import { NavLink } from "react-router-dom";

export function Category() {
  return (
    <>
      <div id="category_container">
        <p>Clothes</p>
        <div id="category_card">
          <p>CATEGORY</p>
          <span></span>
          <NavLink to="/clothes/all">All</NavLink>
          <NavLink to="/clothes/dresses">Dresses</NavLink>
          <NavLink to="/clothes/denim">Denim</NavLink>
          <NavLink to="/clothes/jeans">Jeans</NavLink>
          <NavLink to="/clothes/jumpsuits">Jumpsuits</NavLink>
          <NavLink to="/clothes/tops">Tops</NavLink>
          <NavLink to="/clothes/jacketsandcoats">Jackets and coats</NavLink>
          <NavLink to="/clothes/pants">Pants</NavLink>
          <NavLink to="/clothes/shorts">Shorts</NavLink>
          <NavLink to="/clothes/skirts">Skirts</NavLink>
          <NavLink to="/clothes/loungerieandunderwear">
            Loungerie & underwear
          </NavLink>
          <NavLink to="/clothes/leather">Leather</NavLink>
          <NavLink to="/clothes/sweatersandknits">Sweaters & knits</NavLink>
        </div>
        <div id="size_container">
          <div id="size_clear_card">
            <p>Size</p>
            <button>Clear X</button>
          </div>
          <span id="line"></span>
          <div id="choose_size_card">
            <label id="choose_size">
              <input type="checkbox" />
              <p id="size">XXS</p>
            </label>
            <label id="choose_size">
              <input type="checkbox" />
              <p id="size">XS</p>
            </label>
            <label id="choose_size">
              <input type="checkbox" />
              <p id="size">S</p>
            </label>
            <label id="choose_size">
              <input type="checkbox" />
              <p id="size">M</p>
            </label>
            <label id="choose_size">
              <input type="checkbox" />
              <p id="size">L</p>
            </label>
            <label id="choose_size">
              <input type="checkbox" />
              <p id="size">XL</p>
            </label>
            <label id="choose_size">
              <input type="checkbox" />
              <p id="size">23</p>
            </label>
            <label id="choose_size">
              <input type="checkbox" />
              <p id="size">24</p>
            </label>
            <label id="choose_size">
              <input type="checkbox" />
              <p id="size">25</p>
            </label>
            <label id="choose_size">
              <input type="checkbox" />
              <p id="size">26</p>
            </label>
            <label id="choose_size">
              <input type="checkbox" />
              <p id="size">27</p>
            </label>
            <label id="choose_size">
              <input type="checkbox" />
              <p id="size">28</p>
            </label>
            <label id="choose_size">
              <input type="checkbox" />
              <p id="size">29</p>
            </label>
            <label id="choose_size">
              <input type="checkbox" />
              <p id="size">30</p>
            </label>
            <label id="choose_size">
              <input type="checkbox" />
              <p id="size">31</p>
            </label>
            <label id="choose_size">
              <input type="checkbox" />
              <p id="size">32</p>
            </label>
          </div>
        </div>
        <div id="size_container">
          <div id="size_clear_card">
            <p>Color</p>
            <button>Clear X</button>
          </div>
          <span id="line"></span>
          <div id="choose_size_card">
            <label id="choose_color">
              <input type="checkbox" />
              <div id="color_card"></div>
              <p id="color">Beige</p>
            </label>
            <label id="choose_color">
              <input type="checkbox" />
              <div id="color_card" className="blue"></div>
              <p id="color">Blue</p>
            </label>
            <label id="choose_color">
              <input type="checkbox" />
              <div id="color_card" className="black"></div>
              <p id="color">Black</p>
            </label>
            <label id="choose_color">
              <input type="checkbox" />
              <div id="color_card" className="orange"></div>
              <p id="color">Orange</p>
            </label>
            <label id="choose_color">
              <input type="checkbox" />
              <div id="color_card" className="green"></div>
              <p id="color">Green</p>
            </label>
            <label id="choose_color">
              <input type="checkbox" />
              <div id="color_card" className="brown"></div>
              <p id="color">Brown</p>
            </label>
            <label id="choose_color">
              <input type="checkbox" />
              <div id="color_card" className="purple"></div>
              <p id="color">Purple</p>
            </label>
            <label id="choose_color">
              <input type="checkbox" />
              <div id="color_card" className="gold"></div>
              <p id="color">Gold</p>
            </label>
            <label id="choose_color">
              <input type="checkbox" />
              <div id="color_card" className="taupe"></div>
              <p id="color">Taupe</p>
            </label>
            <label id="choose_color">
              <input type="checkbox" />
              <div id="color_card" className="white"></div>
              <p id="color">White</p>
            </label>
            <label id="choose_color">
              <input type="checkbox" />
              <div id="color_card" className="pink"></div>
              <p id="color">Pink</p>
            </label>
            <label id="choose_color">
              <input type="checkbox" />
              <div id="color_card" className="red"></div>
              <p id="color">Red</p>
            </label>
          </div>
        </div>
        <div id="size_container">
          <div id="size_clear_card">
            <p>Color</p>
            <button>Clear X</button>
          </div>
          <span id="line"></span>
          <div id="choose_price_card">
            <label id="choose_price">
              <input type="checkbox" />
              <p id="price">₦0 - ₦10,000</p>
            </label>
            <label id="choose_price">
              <input type="checkbox" />
              <p id="price">₦10,000 - ₦20,000</p>
            </label>
            <label id="choose_price">
              <input type="checkbox" />

              <p id="price">₦20,000 - ₦ 50,000</p>
            </label>
            <label id="choose_price">
              <input type="checkbox" />
              <p id="price">₦50,000 - ₦ 100,000</p>
            </label>
            <label id="choose_price">
              <input type="checkbox" />

              <p id="price">₦100,000 - ₦ 200,000</p>
            </label>
            <form
              id="write_price_form"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input type="number" />
              <p>to</p>

              <input type="number" />
              <input type="submit" value="Apply" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

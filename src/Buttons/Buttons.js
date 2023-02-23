import React from "react";
import { useState } from "react";
import { memo } from "react";

function Buttons() {
  const [addClass, setAddClass] = useState(false);
  return (
    <div>
      {button.map((item) => {
        return (
          <button
            onClick={() => {
              setAddClass(!addClass);
              console.log(addClass);
            }}
          >
            {item.item}
          </button>
        );
      })}
    </div>
  );
}

const button = [
  {
    id: 1,
    item: 1,
  },
  {
    id: 1,
    item: 1,
  },
  {
    id: 1,
    item: 1,
  },
  {
    id: 1,
    item: 1,
  },
  {
    id: 1,
    item: 1,
  },
  {
    id: 1,
    item: 1,
  },
];
export default memo(Buttons);

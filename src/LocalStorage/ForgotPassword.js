import React, { memo, useState } from "react";

function ForgotPassword({ data }) {
  const [input, setInput] = useState(false);

  const Update = (e) => {
    const filtered = data.filter((item) => item.name === e.target.name.value);
    let edit =
      filtered[0].name === e.target.name.value
        ? [
            ...data,
            {
              ...filtered[0],
            },
          ]
        : "xayr";
    console.log(edit);
  };

  return (
    <>
      <form
        id="forgotpassword"
        onSubmit={(e) => {
          e.preventDefault();
          Update(e);
        }}
      >
        <input
          type="text"
          name="name"
          onChange={(e) => {
            e.target.value !== "" ? setInput(true) : setInput(false);
          }}
        />
        <input
          type="text"
          style={input ? { visibility: "visible" } : { visibility: "hidden" }}
          name="newInput"
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default memo(ForgotPassword);

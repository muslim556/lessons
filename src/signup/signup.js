import React, { useState } from "react";
import "./signup.css";
import NumberFormat from "react-number-format";

export function Signup() {
  const [data, setData] = useState({
    ism: "",
    surname: "",
    tel: "",
    grup: "",
    img: {},
  });

  console.log(data);

  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <figure>
            <img
              src={data.img.size ? URL.createObjectURL(data.img) : {}}
              alt=""
            />
          </figure>
          <input
            type="text"
            name="ism"
            placeholder="Ismingiz"
            autoComplete="off"
            value={data.ism}
            onChange={(e) => {
              setData({ ...data, ism: e.target.value });
            }}
          />
          <input
            type="text"
            name="surname"
            placeholder="Familiyangiz"
            autoComplete="off"
            value={data.surname}
            onChange={(e) => {
              setData({ ...data, surname: e.target.value });
            }}
          />
          <NumberFormat
            format="+998 (##) ###-##-##"
            allowEmptyFormatting
            onValueChange={(values) => {
              const { value } = values;
              setData({ ...data, tel: value });
            }}
            name="tel"
          />
          <input
            type="text"
            name="grup"
            placeholder="UITC guruxingiz"
            autoComplete="off"
            value={data.grup}
            onChange={(e) => {
              setData({ ...data, grup: e.target.value });
            }}
          />
          <label>
            <input
              type="file"
              onChange={(e) => {
                setData({ ...data, img: e.target.files[0] || {} });
              }}
            />
            <span>Choose a photo</span>
            <span>
              {(data.img.size ? data.img.size / 1024 : 0).toFixed()}kb
            </span>
          </label>
          <button>Sign up</button>
        </form>
      </div>
    </>
  );
}

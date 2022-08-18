import React, { useState } from "react";
import "./onchange.css";

export function OnChange() {
  const [ism, setIsm] = useState("");
  const [surname, setSurname] = useState("");
  const [grup, setGrup] = useState("");
  const [tel, setTel] = useState("");
  const [imgDta, setImgDta] = useState(false);
  const [data, setData] = useState([]);

  function Submit(e) {
    e.preventDefault();
    console.log(ism, surname, grup, tel);
    let data = { ism, surname, grup, tel,};
    if (ism && surname && grup && tel) {
      setData((a) => [...a, data]);
      setIsm("");
      setSurname("");
      setGrup("");
      setTel("");
    }
  }
  return (
    <>
      <form id="form" onSubmit={Submit}>
        <input
          name="ism"
          placeholder="Ism"
          value={ism}
          autoComplete="off"
          onChange={(e) => {
            setIsm(e.target.value);
          }}
        />
        <input
          name="surname"
          placeholder="Familiya"
          value={surname}
          autoComplete="off"
          onChange={(e) => {
            setSurname(e.target.value);
          }}
        />
        <input
          name="grup"
          placeholder="Grup"
          value={grup}
          autoComplete="off"
          onChange={(e) => {
            setGrup(e.target.value);
          }}
        />
        <input
          name="tel"
          placeholder="Tel"
          value={tel}
          autoComplete="off"
          onChange={(e) => {
            setTel(e.target.value);
          }}
        />
        <label>
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            onChange={(e) => {
              setImgDta(e.target.files[0]);
            }}
          />
          <span>Coose a photo</span>
        </label>
        <button>Add</button>
      </form>
      {data.map((a) => {
          <div id="result-card">
            <figure style={imgDta ? { display: "flex" } : {}}>
              <img src={imgDta ? URL.createObjectURL(imgDta) : ""} alt="" />
            </figure>
            <div id="text-card">
              <p>Name: {a.ism}</p>
              <p>Surname: {a.surname}</p>
              <p>Grup: {a.grup}</p>
              <p>Tel: {a.tel}</p>
            </div>
          </div>
      })
    </>
  );
}

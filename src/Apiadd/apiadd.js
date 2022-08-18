import React, { useState, useEffect } from "react";
import "./apiadd.css";
import NumberFormat from "react-number-format";
import axios from "axios";

export function ApiAdd() {
  const [user, setUser] = useState({
    tel: "",
    img: {},
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://uitc.my-api.uz/students")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div id="container">
        <form
          id="signup-form"
          onSubmit={(e) => {
            e.preventDefault();

            const formData = new FormData();
            formData.append("img", e.target.img.files[0] || {});
            delete user.img;
            formData.append(
              "data",
              JSON.stringify({
                name: e.target.ism.value,
                surname: e.target.fam.value,
                grup: e.target.grup.value,
                tel: user.tel,
                data: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
              })
            );

            axios("https://uitc.my-api.uz/students", {
              method: "POST",
              data: formData,
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
              .then((res) => {
                console.log(res.data);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          {/* <figure>
            <img
              src={user.img.size ? URL.createObjectURL(user.img) : ""}
              alt=""
            />
          </figure> */}

          <input
            type="text"
            name="ism"
            placeholder="Ismingiz"
            autoComplete="off"
          />
          <input
            type="text"
            name="fam"
            placeholder="Familyangiz"
            autoComplete="off"
          />

          <NumberFormat
            format="+99 (8##) ### ####"
            allowEmptyFormatting
            name="tel"
            onValueChange={(values) => {
              const { value } = values;
              setUser({ ...user, tel: value });
            }}
          />

          <input
            type="text"
            name="grup"
            placeholder="UITC gruxingiz"
            autoComplete="off"
          />
          {/* <label>
            <input
              type="file"
              name="img"
              onChange={(e) =>
                setUser({ ...user, img: e.target.files[0] || {} })
              }
            />
            <span>
              {user.img.size ? reNameImg(user.img.name) : "Rasim tanlang"}
            </span>
            <span>
              {user.img.size ? (user.img.size / 1024).toFixed(1) + "kb" : ""}
            </span>
          </label> */}

          <button>Signup</button>
        </form>
      </div>

      <div id="result-container">
        {data.map((item) => {
          return (
            <div key={item.id} id="card">
              <figure>
                <img src={item.img} alt="Bu yerda rasm bolish kerak edi" />
              </figure>
              <div id="text-card">
                <p>{item.name}</p>
                <p>{item.surname}</p>
                <p>{item.grup}</p>
                <p>{item.tel}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

// function reNameImg(imgName) {
//   const arrName = imgName.split("");

//   return arrName.slice(0, 15).join("") + "...";
// }

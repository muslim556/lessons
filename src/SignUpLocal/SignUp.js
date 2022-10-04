import React from "react";
import { useState } from "react";
import "./Signup.css";
import { BiShow } from "@react-icons/all-files/bi/BiShow";
import { BiHide } from "@react-icons/all-files/bi/BiHide";

export function SignUp() {
  const [data1, setData1] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  const dataYukla = () => {
    if (localStorage.getItem("data")) {
      setData1(JSON.parse(localStorage.getItem("data")));
    } else {
      localStorage.setItem("data", JSON.stringify(data1));
    }
  };

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const [user, setUser] = useState({
    id: "",
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const inputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const send = (e) => {
    if (
      user.id === "" &&
      user.name !== "" &&
      user.surname !== "" &&
      user.email !== "" &&
      user.password !== ""
    ) {
      localStorage.setItem(
        "data",
        JSON.stringify([...data1, { ...user, id: new Date().getTime() }])
      );
      setUser({
        id: "",
        name: "",
        surname: "",
        email: "",
        password: "",
      });
      dataYukla();
    } else {
      let edit = [...data1.map((item) => (item.id === user.id ? user : item))];
      localStorage.setItem("data", JSON.stringify(edit));
      setUser({
        id: "",
        name: "",
        surname: "",
        email: "",
        password: "",
      });
      dataYukla();
    }
  };

  return (
    <div id="signup">
      <p>Hello there!</p>
      <p>Please sign in or create account to continue</p>
      <div id="forms_container">
        <form id="first_form">
          <p>Sign In</p>
          <label>
            <p>Email</p>
            <input type="text" />
          </label>
          <label>
            <p>Password</p>
            <input type="text" />
          </label>
          <label id="remember">
            <input type="checkbox" />
            <p>Remeber my details</p>
          </label>
          <button>SIGN IN</button>
        </form>
        <form
          id="first_form"
          onSubmit={(e) => {
            e.preventDefault();
            send();
          }}
        >
          <p>Create account</p>
          <label>
            <p>First Name</p>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={inputChange}
            />
          </label>
          <label>
            <p>Last Name</p>
            <input
              type="text"
              name="surname"
              value={user.surname}
              onChange={inputChange}
            />
          </label>
          <label>
            <p>Email</p>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={inputChange}
            />
          </label>
          <label>
            <p>Create Password</p>
            <div>
              <input
                type={passwordShown ? "text" : "password"}
                name="password"
                value={user.password}
                onChange={inputChange}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  togglePassword();
                }}
              >
                <BiShow
                  style={
                    passwordShown ? { display: "none" } : { display: "block" }
                  }
                />
                <BiHide
                  style={
                    passwordShown ? { display: "block" } : { display: "none" }
                  }
                />
              </button>
            </div>
          </label>
          <button
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            SIGN IN
          </button>
        </form>
      </div>
      {data1.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.surname}</p>
            <p>{item.password}</p>
            <p>{item.email}</p>
          </div>
        );
      })}
    </div>
  );
}

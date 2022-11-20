import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./UseForm.css";
import hide from "../Router/icons/hide.webp";
import show from "../Router/icons/show.webp";

export function UseForm() {
  const [notSee, setNotSee] = useState(true);
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  return (
    <>
      <div id="container">
        <form id="form" onSubmit={handleSubmit(onSubmit)}>
          <p id="login">Log in</p>
          <input
            {...register("Ism", {
              required: "Empty fields have to be filled",
              minLength: {
                value: 6,
                message:
                  "This input must exceed 6 characters or use latin letters",
              },
              pattern: {
                value: /[A-Z, a-z]\d+/,
                message: "This input has to be contained numbers",
              },
            })}
            placeholder="Username"
            autoComplete="off"
            id="ism_inp"
          />

          <div id="password_inp">
            <input
              {...register("Password")}
              type="password"
              placeholder="Password"
              autoComplete="off"
              id="password"
            />

            <img
              src={hide}
              alt="hide"
              style={notSee ? { display: "none" } : { display: "block" }}
              onClick={() => {
                setNotSee(true);
                ShowPassword();
              }}
            />
            <img
              src={show}
              style={notSee ? { display: "block" } : { display: "none" }}
              alt="show"
              onClick={() => {
                setNotSee(false);
                ShowPassword();
              }}
            />
          </div>

          <button id="submit">Explore Cars</button>
        </form>
      </div>
    </>
  );
}

function ShowPassword() {
  let showpassword = document.getElementById("password");
  if (showpassword.type === "password") {
    showpassword.type = "text";
  } else {
    showpassword.type = "password";
  }
}

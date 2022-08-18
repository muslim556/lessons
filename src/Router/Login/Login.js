import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import hide from "../icons/hide.webp";
import show from "../icons/show.webp";

export function LoginPage() {
  const [ShowHide, setShowHide] = useState(true);
  const [notSee, setNotSee] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  return (
    <>
      <div
        id="container"
        style={ShowHide ? { display: "flex" } : { display: "none" }}
      >
        <form id="form" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("Ism", {
              required: "Empty fields have to be filled",
              minLength: {
                value: 6,
                message: "This input must exceed 6 characters",
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
          <div id="messages">
            {errors?.Ism && <p>{errors?.Ism?.message || "Error!"}</p>}
          </div>

          <div id="password_inp">
            <input
              {...register("Password")}
              name="password"
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
          <div id="messages_password">
            {errors?.Password && <p>{errors?.Password?.message || "Error"}</p>}
          </div>
          <button
            id="submit"
            onClick={() => {
              setShowHide(false);
            }}
          >
            Explore Cars
          </button>
        </form>
      </div>
    </>
  );
}

function ShowPassword() {
  const x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

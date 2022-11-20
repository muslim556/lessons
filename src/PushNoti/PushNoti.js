import React from "react";
import addNotification from "react-push-notification";
import logo from "./Logo.jpg";

export function PushNoti() {
  const Notify = () => {
    addNotification({
      title: "Hello",
      message: "Thank you",
      duration: "2000",
      icon: logo,
      native: true,
    });
  };
  return (
    <>
      <p>salom</p>
      <button
        onClick={() => {
          Notify();
        }}
      >
        Click
      </button>
    </>
  );
}

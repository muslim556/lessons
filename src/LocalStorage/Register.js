import React, { memo, useState } from "react";
import ForgotPassword from "./ForgotPassword";
import SignIn from "./SignIn";

function Register() {
  const [arr, setArr] = useState(
    JSON.parse(localStorage.getItem("user")) || []
  );

  return (
    <>
      <form
        className="register"
        onSubmit={(e) => {
          e.preventDefault();
          if (e.target.password.value === e.target.ConfirmPassword.value) {
            const targetData = e.target;
            const value = {};
            for (let i = 0; i < targetData.length; i++) {
              if (targetData[i].name !== "") {
                value[targetData[i].name] = targetData[i].value;
                setArr([...arr, { ...value }]);
              }
              localStorage.setItem(
                "user",
                JSON.stringify([...arr, { ...value }])
              );
            }
            return value;
          } else {
            alert("dovdir xato qilding");
          }
        }}
      >
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="password" placeholder="Password" />
        <input type="text" name="ConfirmPassword" placeholder="Password" />
        <input type="submit" value="submit" />
      </form>

      <SignIn data={arr} />
      <ForgotPassword data={arr} />
    </>
  );
}

export default memo(Register);

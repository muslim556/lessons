import React, { memo } from "react";

function SignIn({ data }) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const filtered = data.filter(
            (item) => item.name === e.target.name.value
          );
          console.log(filtered[0]);

          if (filtered[0].ConfirmPassword === e.target.signinPassword.value) {
            console.log(filtered[0].ConfirmPassword);
          } else {
            console.log("xato");
          }
        }}
      >
        <input type="text" name="name" />
        <input type="text" name="signinPassword" />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default memo(SignIn);

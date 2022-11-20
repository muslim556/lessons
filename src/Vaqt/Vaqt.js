import React from "react";

export function Vaqt() {
  const startYear = "2021";
  const startMonth = "5";

  const nowTime = new Date().toLocaleDateString().split(".");

  const nowYear = nowTime[2];
  const nowMonth = nowTime[1];

  var expMonth = `${nowMonth - startMonth}`;
  var expYear = `${nowYear - startYear}`;

  const experience = `${expYear} Yil ${expMonth} Oy`;

  return (
    <>
      <p>{experience}</p>
    </>
  );
}

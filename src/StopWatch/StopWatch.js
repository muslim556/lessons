import React, { useEffect, useState } from "react";
import "./StopWatch.css";

export function StopWatch() {
  const [timeCount, setTimeCount] = useState(0);
  const [boolean, setBoolean] = useState(false);

  useEffect(() => {
    let time = null;

    if (boolean) {
      time = setInterval(() => {
        setTimeCount((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(time);
    }

    return () => clearInterval(time);
  }, [boolean]);

  return (
    <div className="numbers">
      <div>
        <span>{("0" + Math.floor((timeCount / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((timeCount / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((timeCount / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        <button onClick={() => setBoolean(!boolean)}>
          {!boolean ? "Start" : "Stop"}
        </button>
        <button
          onClick={() => {
            setBoolean(false);
            setTimeCount(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

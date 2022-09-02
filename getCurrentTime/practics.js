import React, { useState } from "react";

export default function App2() {
  const now2 = new Date().toLocaleTimeString();

  const [timetime, getTime2] = useState(now2);
  function when() {
    const time2 = new Date().toLocaleTimeString();
    getTime2(time2);
  }

  return (
    <div>
      <h1>Hello 가영</h1>
      <h2>{timetime}</h2>
      <button onClick={when}>getTime Right now!</button>
    </div>
  );
}

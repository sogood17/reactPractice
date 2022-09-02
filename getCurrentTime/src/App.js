import "./styles.css";

import React, { useState } from "react";

export default function App() {
  const now = new Date().toLocaleTimeString();

  const [time, getTime] = useState(now);

  function newTime() {
    const current = new Date().toLocaleTimeString();
    getTime(current);
  }

  return (
    <div className="App">
      <h1>Hello 라미!!</h1>
      <h1>{time}</h1>
      <button onClick={newTime}>Current time</button>
    </div>
  );
}

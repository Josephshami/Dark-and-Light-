import React, { useState } from "react";
import "./style.css";

export default function Room() {
  const [light, setLight] = useState(false);
  function lightSwith() {
    setLight(!light);
  }
  return (
    <div className={light ? "lit" : "dark"}>
      <h1>The room is {light ? "lit" : "dark"}</h1>
      <button onClick={lightSwith}>Lightswitch</button>
    </div>
  );
}

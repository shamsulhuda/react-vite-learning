import { useState } from "react";
import "./App.css";
import BatteryStatus from "./BatteryStatus";
import Timer from "./Timer";

function App() {
  const [interval, setInterval] = useState(1000);
  return (
    <div className="App">
      <BatteryStatus></BatteryStatus>
      <Timer interval={interval}></Timer>
      <button onClick={() => setInterval(interval + 100)}>Incease</button>
      <button onClick={() => setInterval(interval - 100)}>Decease</button>
    </div>
  );
}

export default App;

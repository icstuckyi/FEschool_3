import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setColor] = useState("red");
  const newColor = buttonColor === "red" ? "blue" : "red";
  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setColor(newColor)}
      >
        change to {newColor}!
      </button>
    </div>
  );
}

export default App;

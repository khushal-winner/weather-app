import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>How much days i would take to finish this project?</h1>
      <div className="card">
        {count > 10 ? (
          "Not more than 10 days, Maybe 🤔"
        ) : (
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        )}
      </div>
    </>
  );
}

export default App;

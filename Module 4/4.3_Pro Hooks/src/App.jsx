import React, { useEffect, useState } from "react";
import "./App.css";

// Do not change this
const LARGE_NUMBER = 1000000000;

function App() {
  const [value, setValue] = useState(0);
  const [dark, setTheme] = useState(true);
  const [themeName, setThemeName] = useState("dark");
  const [currentList, setList] = useState([]);

  // TODO 1:
  // This calculation is very slow.
  // Optimize it so it runs ONLY when `value` changes.
  // add React component useMemo and dependency
  // const delayValue = () => {
  //   console.log("Delay Function Ran");
  //   for (let i = 0; i < LARGE_NUMBER; i++) {}
  //   return value + 2;
  // });

  const delayValue = React.useMemo(() => {
    console.log("Delay Function Ran");
    for (let i = 0; i < LARGE_NUMBER; i++) {}
    return value + 2;
  }, [value]);

  // TODO 2:
  // This function is recreated on every render.
  // Optimize it so React can reuse the same function.
  // add React component useCallback and dependency
  // const testFunction = () => {
  //   return [value * 3, value * 4];
  // };

  const testFunction = React.useCallback(() => {
    return [value * 3, value * 4];
  }, [value]);

  // Do not change this
  useEffect(() => {
    console.log("Callback Function was called");
  }, [testFunction]);
  

  // Do not change this
  useEffect(() => {
    setThemeName(dark ? "dark" : "light");
  }, [dark]);

  const handleClick = () => {
    setTheme(!dark);
  };

  const handleChangeValue = () => {
    setValue(value + 1);
  };

  const handleList = () => {
    setList(testFunction());
  };

  const styleTheme = {
    backgroundColor: dark ? "black" : "#ccc7c7",
  };

  return (
    <div className="page" style={styleTheme}>
      <button onClick={handleClick}>{themeName}</button>

      <h1>{value}</h1>

      <button onClick={handleChangeValue}>Change Value</button>
      <button onClick={handleList}>Show List</button>

      {/* TODO 3:
          Do NOT call the function here.
          Render an optimized value instead. */}
      {/* <h2>{delayFunction()}</h2> */}
      <h2>{delayValue}</h2>

      <div>
        {currentList.map((item, index) => (
          <h2 key={index}>{item}</h2>
        ))}
      </div>
    </div>
  );
}

export default App;

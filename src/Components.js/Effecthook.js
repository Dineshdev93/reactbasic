import React, { useState, useEffect } from "react";

export default function Effecthook() {
  const [data, setData] = useState(10);
  const [count, setCount] = useState(100);
  useEffect(() => {
    console.warn("useEffect");
  }, [data]); //we pass data state,so when data is updated then useeffct is called every time,
  // and when count updated then useeeffct is not called
  return (
    <div>
      <h1>Specified useEffect hook</h1>
      <p>useEffect with props and state</p>
      <h5>Upadte Data{data}</h5>
      <h5>Upadte Count{count}</h5>
      <button onClick={() => setData(data + 1)}>update data</button>
      <button onClick={() => setCount(count + 1)}>update Count</button>
    </div>
  );
}

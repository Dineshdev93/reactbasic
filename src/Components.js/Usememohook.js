import { useState, useMemo } from "react";
function Usememohook() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const updatecount = useMemo(function demo() {
    console.log("function")
    return count+4;
  },[count]);
  return (
    <>
      <h1>Use memo hook</h1>
      <p>The useMemo Hook only runs when one of its dependencies update.

          This can improve performance.
        The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.

         In this example, we have an expensive function that runs on every render.

         When changing the count or adding a todo, you will notice a delay in execution.</p>
      <h2>Addition : each time add by +1 = {count}</h2>
      <h3>Multiplication :each time multiply by 5 to 10 = {item}</h3>
      <h3>Demo of Usememohook hook : {updatecount}</h3>
      <button onClick={() => setCount(count + 1)}>Addition</button>
      <button onClick={() => setItem(item * 5)}>Multiplication</button>
    </>
  );
}
export default Usememohook;

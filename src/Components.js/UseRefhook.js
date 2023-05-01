import { useRef, useState } from "react";
function UseRefhook() {
  let inputRef = useRef(false);
  const [text, setText] = useState("");
  function handle() {
    console.warn("function called");
    setText(text.toUpperCase());
  }
  const handleclick = () => {
    // inputRef.current.value = "1000";
    inputRef.current.focus();
    inputRef.current.style.color = "white";
    inputRef.current.style.backgroundColor = "black";
  };
  return (
    <>
    <h1>Controlled component and useRef hook use</h1>
      <textarea
        rows={12}
        style={{ width: "70%", marginTop: "10px" }}
        ref={inputRef}
        onChange={(e) => setText(e.target.value)} // Controlled component via state
         value={text}
      ></textarea>{" "}
      <br />
      <button onClick={handleclick}>Click</button>
      <button onClick={handle}>toUpperCase</button>
      <button onClick={() => setText("")}>Clear</button>
      <h4>
        The useRef Hook allows you to persist values between renders. It can be
        used to store a mutable value that does not cause a re-render when
        updated. It can be used to access a DOM element directly. useRef() only
        returns one item. It returns an Object called current.
      </h4>
    </>
  );
}
export default UseRefhook;

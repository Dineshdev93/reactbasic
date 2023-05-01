import React from "react";
import { useState } from "react";

export default function UsState() {
  let [text, setText] = useState("");

  function chnage(i) {
    setText(text.toUpperCase());
  }

  const clear = () => {
    setText((text = ""));
  };
  const handler = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <textarea
        placeholder="Enter text"
        onChange={handler}
        value={text}
        rows={13}
      >
        Text Area
      </textarea>{" "}
      <br />
      <h1>Preview</h1>
      <h5>{text}</h5>
      <button onClick={chnage}>click</button>
      <button onClick={clear}>clear</button>
    </div>
  );
}

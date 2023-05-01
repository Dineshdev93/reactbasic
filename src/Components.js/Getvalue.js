import React from "react";
import { useState } from "react";
export default function Getvalue() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  const prnt = (val) => {
    setData(val.target.value);
  };

  return (
    <div>
      <h1>Get Input box vlaue</h1>
      Text Area :{" "}
      <textarea
        onChange={prnt}
        rows={12}
        style={{ color: "darkgreen" }}
      ></textarea>{" "}
      <br />
      {print ? <h3>{data}</h3> : null}
      <button
        onClick={() => {
          setPrint(true);
        }}
      >
        Print
      </button>
    </div>
  );
}

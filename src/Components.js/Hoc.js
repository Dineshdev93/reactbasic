import { useState } from "react";
function Hoc() {
  return (
    <>
      <h1> Higher Oreder Component </h1>
      <h5>
        A higher-order component is a function that takes in a component and
        returns a new component.In react, a higher-order component (HOC) is
        deemed an advanced technique for reusing component logic. They are not
        part of the React API, but they are the model that begins from React's
        compositional nature. A higher-order function takes a function as an
        argument and returns a function
      </h5>
      <Hocblue cnt={Counter} />
      <Hocred cnt={Counter} />
      <Hocgreen cnt={Counter} />
    </>
  );
}
function Hocblue(props) {
  return (
    <>
      <h2 style={{ backgroundColor: "blue", width: "50%", marginLeft: "90px" }}>
        Blue
        <props.cnt />
      </h2>
    </>
  );
}
function Hocred(props) {
  return (
    <>
      <h2 style={{ backgroundColor: "red", width: "50%", marginLeft: "90px" }}>
        <props.cnt />
        Red
      </h2>
    </>
  );
}
function Hocgreen(props) {
  return (
    <>
      <h2
        style={{ backgroundColor: "green", width: "50%", marginLeft: "90px" }}
      >
        <props.cnt />
        Red
      </h2>
    </>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
}
export default Hoc;

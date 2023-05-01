import React from "react";
import { useState } from "react";
export default function Profile() {
  const [login, setLogedin] = useState(5);
  //   const login =5;
  return (
    <div>
      {login === 1 ? (
        <h1>user 1</h1>
      ) : login === 2 ? (
        <h1>user2</h1>
      ) : (
        <h1>user3</h1>
      )}
    </div>
  );
}

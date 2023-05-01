import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navigation">
      <li>
        {" "}
        <Link to="/">Home Page</Link>
      </li>
      <li>
        <Link to="/Create">Create Page</Link>
      </li>
      <li>
        <Link to="Mignup">Mignup Page</Link>
      </li>
      <li>
        <Link to="Login">Login Page</Link>
      </li>
    </div>
  );
}

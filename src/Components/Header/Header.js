import React from "react";
import logo from "./a.gif";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="" width="250px" />
    </div>
  );
}

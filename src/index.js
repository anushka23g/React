import React from "react";
import reactDOM from "react-dom";

var fname = "Tom";
var lname = "Sawyer";
reactDOM.render(
  <div>
    <h1>Hi, my first name is {fname}</h1>
    <h1>and my last name is {lname}</h1>
  </div>,
  document.getElementById("root")
);

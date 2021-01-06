import React from "react";
import reactDOM from "react-dom";

var fname = "Tom";
var lname = "Sawyer";
var c= "V";
reactDOM.render(
  <div>
    <h1>Hi, my first name is {fname + " " + lname}.</h1>
    <h1>I study in {c}th standard</h1>
  </div>,
  document.getElementById("root")
);

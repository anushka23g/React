import React from "react";
import reactDOM from "react-dom";

reactDOM.render(
  <div>
    <p className="color" contentEditable="true">My fav Food</p>
    <ol>
      <li>Pizza</li>
      <li>Pasta</li>
      <li>bread</li>
    </ol>
  </div>,
  document.getElementById("root")
);

import React from "react";
import reactDOM from "react-dom";
var url = "https://picsum.photos/id/237/200/300";

const state = {
  color: "blue",
  backgroundColor: "red"
};
reactDOM.render(
  <div>
    <h1 style={state}>It's me!</h1>
  </div>,
  document.getElementById("root")
);

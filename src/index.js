import React from "react";
import reactDOM from "react-dom";
var url = "https://picsum.photos/id/237/200/300";
reactDOM.render(
  <div>
    <p className="color" contentEditable="true">
      My fav
    </p>
    <img src={url} />
  </div>,
  document.getElementById("root")
);

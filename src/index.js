
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
=======

import React from 'react';
import reactDOM from 'react-dom';

reactDOM.render(
  <div>
    <p>My fav Food</p>
    <ol>
    <li>Pizza</li>
    <li>Pasta</li>
    <li>bread</li>
    </ol>
  </div>,
  document.getElementById('root')
);
=======

import React from "react";
import reactDOM from "react-dom";

var d= new Date();
var y=d.getFullYear();

reactDOM.render(
<div><h1>the year is {y}</h1>
</div>,
document.getElementById('root')
);

=======

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


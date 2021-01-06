//JSX- Creating Functions
import React from "react";
import reactDOM from "react-dom";

function Heading()
{
return <h1>Hey, it's me again</h1>;
}

reactDOM.render(
  <Heading/>
  ,
document.getElementById('root')
)

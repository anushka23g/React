//JSX- Challenge- Functions
import React from "react";
import reactDOM from "react-dom";

function Heading()
{
return <h1>Hey, it's me again</h1>;
}

function List()
{
return <div>
  <p>i like:</p>
<ul>
  <li>gta</li>
  <li>fifa</li>
  <li>tekken</li>
</ul>
</div>;
}

reactDOM.render(
  <div>
<Heading/>
<List/>
</div>
  ,
document.getElementById('root')
)

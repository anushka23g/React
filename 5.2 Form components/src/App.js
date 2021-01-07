import React, { useState } from "react";
import "./styles.css";

export default function App() {

  const [fn,setf]=useState("");
  const [ln,setl]=useState("");
const [sub,issub]=useState(false);
 
function changef(event){
setf(event.target.value);
  }

  function changel(event)
{
setl(event.target.value);
}

function subm()
{
issub(true);
}
return (
    <div className="App">
      <h1>{!sub ?"Login" : "hi" + fn +" "+ln}</h1>
      <h2>{"welcome " + fn + " "+ ln}</h2>
      <form>
        <input type="text" onChange={changef} placeholder="fname" value={fn} />
        <input type="text" onChange={changel} placeholder="lname" vaue={ln}/>
      <input type="submit" onClick={subm} />
 </form>
    </div>
  );
}

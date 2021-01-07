import React,{useState} from 'react';
import "./styles.css";


 function App()
{
const [heading,seth]= useState("");

const [sub, setsubmit]= useState(false);

function ssubmit()
{
setsubmit(true);
}

function changeh(event)
{
seth(event.target.value);
}

return (
 <div>
<h1 >{!sub ? "hello " + heading : "Submitted"}</h1>
<input onChange={changeh} value={heading}></input>
<button onClick={ssubmit}>submit</button>

 </div>);
  
  
}

export default App;

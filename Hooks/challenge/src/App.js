import React,{useState} from 'react';
import "./styles.css";


 function App()
{
 
  
const [s,set]=useState("old");




  function change()
  {
set(<p>new</p>);

}
 

return(
<div className="App">

<p></p>
  
  <h1>{s}</h1>

  <button className='btn1' onClick={change}>
    change text
    </button>
 
 

</div>
);
}

export default App;
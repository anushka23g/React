import React,{useState} from 'react';
import "./styles.css";


 function App()
{
  
  const [num, setNum]=useState(0);


  function inc()
  {
setNum(num+1);

}
  function dec()
  {
    setNum(num>0 ? num-1 : 0);
      }

 

return(
<div className="App">
<p>Tally counter App</p>
  
  <h1>{num}</h1>

  <button className='btn1' onClick={inc}>
    +
    </button>
    <button className='btn2' onClick={dec}>
-
    </button>


</div>
);
}

export default App;
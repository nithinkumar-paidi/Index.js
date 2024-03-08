import {useState} from 'react'

function Statehook() {
    const [count,setCount]=useState(0);
    console.log("Component Loaded");
  return (
    <div>
        <button onClick={()=>setCount((prevState)=>prevState +1)}> Click</button>
        <div>{count}</div>
    </div>
  )
}

export default Statehook
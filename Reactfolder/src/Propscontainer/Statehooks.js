import {useEffect, useState}from 'react'

function Statehooks() {
    const[runs,setRuns]= useState(0);
    const[wickets,setWickets]=useState(0);
    console.log("Component loaded");
    useEffect(()=>{
        console.log("Better luck next time");
    } ,[wickets]);
  return (
    <div>
    <button onClick={()=>setRuns((prevState)=>prevState +1)}>
        Runs({runs})
    </button>
    <button onClick={()=>setWickets((prevState)=>prevState +1)}>
        Wickets({wickets})
    </button>
    </div>
  )
}

export default Statehooks
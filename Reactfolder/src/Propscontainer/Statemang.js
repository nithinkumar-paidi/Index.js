import React from 'react'
import {useState} from 'react'
import Firstprops from './First props'
const Statemang = () => {
    // const [city,setcity]= useState("Hyderabad")
    
    // useEffect(()=>{
    //     if( city==="Hyderabad"){
    //         setcity("Bangalore")
    //     }else{
    //         setcity("sailingi")
    //     }
    // },[city])
    // if( city==="Hyderabad"){
    //     setcity("Bangalore")
    // }
    const [Simplecomponent,setcomponent]=useState(true)
  return (
    // <div> i live in {city}
    <div>
    {Simplecomponent?<Firstprops/>:"it's flase"}
    </div>
  )
}

export default Statemang
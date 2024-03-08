import React from 'react'
import Usememo from './Usememo'

function App2(props) {
  return (
    <div style={({color:'red'})}>
       {/* <h3> Hello {props.name} what is your{props.age}</h3> */}
<Usememo/>
    </div>
  )
}
App2.defaultProps = {name:"nithin", age:21}


export default App2
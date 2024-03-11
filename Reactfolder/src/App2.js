import React from 'react'
// import Usememo from './Usememo'
import LoginPage from './LoginPage'

function App2(props) {
  return (
    <div style={({color:'red'})}>
       {/* <h3> Hello {props.name} what is your{props.age}</h3> */}
{/* <Usememo/> */}
<LoginPage/>

    </div>
  )
}
// App2.defaultProps = {name:"nithin", age:21}


export default App2
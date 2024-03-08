

import React from 'react'

const Secoundprops = (props) => {
const {model, dealer,price }= props.xyz;

  return (
    <div>
    <ul>
      <li>{price}</li>
      <li>{model}</li>
      <li>{dealer}</li>
    </ul>
    </div>
  )
}

export default Secoundprops
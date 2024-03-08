import React from 'react'
import{memo} from 'react'
function Expcomp(props) {
    console.log("Expcomp rendered", props.count,"times");
  return (
    <div>Expcomp</div>
  )
}

export default memo(Expcomp)
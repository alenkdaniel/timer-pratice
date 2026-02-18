import React, { useEffect, useState } from 'react'
import Timer from './timer'
import Timer2 from './Timer2'

const App = () => {
  // const [count, setCount] = useState(0)
  // const [forward, setforward] = useState(true)
  // const [isStart, setIsStart] = useState(true)

  // useEffect(()=>{
  //    const interval = setInterval(()=>{
  //     if(forward){
  //       setCount(prev=>prev + 1)
  //     }else{
  //       setCount(count=>count-1)
  //     }
  //   },1000)
  // },[forward])
  return (
    <div>
      {/* <h2>{count}</h2>
      <button onClick={()=>setforward(true)}>Forward</button>
      <button onClick={()=>setforward(false)}>Backward</button>
      <button onClick={()=>setforward(false)}>Reset</button> */}
      {/* <Timer/> */}
      <Timer2/>
    </div>
  )
}

export default App

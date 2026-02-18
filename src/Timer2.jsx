import React, { useEffect, useRef, useState } from 'react'

const Timer2 = () => {
    const [number, setNumber] = useState(0)// store number
    const [direction, setDirection] = useState('')// store direction
    const interValRef = useRef(null) // for intervalValue
    const stop = ()=>{
        clearInterval(interValRef.current)// it stops current interval
    }
    const reset = ()=>{
        setNumber(0)//resets number to 0
    }
    useEffect(()=>{
        if(direction==='forward'){//checks forward
            interValRef.current = setInterval(()=>{//forwardValue saves to intervalRef
                setNumber(prev=>prev+1)//increment by 1
            },1000)
        }else if(direction==='backward'){
         stop()
            interValRef.current = setInterval(()=>{ //BackwardValue saves to intervalRef
                 setNumber(prev=>{
                    if(prev>1){// for restrict numbers goes to below 0 in backward
                        return prev-1 ////decrement by 1
                    }
                    return 0
                 }) 
            },1000)  
           
        }
    },[direction])
  return (
    <div>
      <h2>{number}</h2>
      <button onClick={()=>setDirection('forward')}>Forward</button>
      <button onClick={()=>setDirection('backward')}>Backward</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Timer2

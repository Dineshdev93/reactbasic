import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
export default function Useeffecthook() {
    const [count,setCount]=useState(1);
    useEffect(()=>{
       console.warn({count});
    })
    // normal use = here useeffect every time call when state and props and component create
  return (
    <div>
      <h1>Use Effect=={count}</h1>
      <button onClick={()=>setCount(count+1)}>update data</button>
    </div>
  )
}

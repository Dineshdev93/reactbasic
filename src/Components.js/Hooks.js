import React, { useState } from 'react'

const Hooks = () => {
const[color,setColor]=useState(false);
  return (
    <div>{
        color?<h1 style={{backgroundColor:"red"}}>Colors</h1>:null
        }
         <button onClick={()=>setColor(true)}>Red</button>

    </div>
  )
}

export default Hooks

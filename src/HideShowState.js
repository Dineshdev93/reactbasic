import React from 'react'
 import { useState } from 'react'

export default function HideShowState() {
  const[status,setStatus]=useState(false);
  return (
    <div>
    
         {
          status? <h1 style={
            {backgroundColor:"red"}
          } >Dinesh</h1>:null
         }
         
         {/* <button onClick={()=>{setStatus(true)}}>show</button>
         <button onClick={()=>{setStatus(false)}}>Hide</button> */}
          <button onClick={()=>{setStatus(!status)}}>Toggle</button>
    </div>
  )
}

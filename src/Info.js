import React from 'react'
import { useState } from 'react'

export default function Info() {
  const [name,setName]=useState("");
  const [tnc,settnc]=useState(false);

  function getformdata(e){
    console.warn(name,tnc);
      e.preventDafault()
  }
  return (
    <div>
    <form onSubmit={getformdata}>
       Name : <input type='text'onChange={(e)=>setName=(e.target.value)}></input> <br/> <br/>
       SurName: <input type='text'onChange={(e)=>setName=(e.target.value)}></input> <br/><br/>
       Email : <input type='email'></input> <br/><br/>
       Password : <input type='password'></input> <br/><br/>
       Terms and conditions <input type='Checkbox'onChange={(e)=>settnc=(e.target.checked)}></input>
       <button type='submit'>Submit</button>
       </form>
      
    </div>
  )
}

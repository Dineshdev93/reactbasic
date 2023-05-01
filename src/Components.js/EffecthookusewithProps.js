import React ,{useEffect} from 'react'

export default function EffecthookusewithProps(props) {
    useEffect(()=>{
        console.log("called useEffect")
    },[props.count])
  return (
    <div>
          <h1>UseEffect with props count = {props.count}</h1>
          <h2>UseEffect with props data = {props.data}</h2>
           {/* if you want to send  props in the form of state then you have to sends props from
              parent component to child component */}
    </div>
  )
}

import Reusearrchild from "./Reusearrchild";
import {useState} from 'react'
function Reuse_com_arrlist() {
    const student = [
        {
            Name: "Dinesh",
            email: "rfn@gamil.com",
            Address: [{ Hn: 22, city: "noyda" }], // Nested Array objects
          },
          {
            Name: "Rajesh",
            email: "tfn@gamil.com",
            Address: [
              { Hn: 27, city: "Delhi" },
              { Hn: 266, city: "raj" },
              { Hn: 277, city: "up" },
            ],
          },
          {
            Name: "Heamnt",
            email: "lion@gamil.com",
            Address: [
              { Hn: 29, city: "Jhumjhunu" },
              { Hn: 2700, city: "dungar" },
              { Hn: 2767, city: "indore" },
            ],
          },
    ]
    const [staus,setStatus]=useState("")
    function cols(){
      alert("hello child")
    }
  return (
    <>
      <h1>Parent</h1>
      {student.map((data, i) => (
        <div key={i}>
          <Reusearrchild info={data} />
          
        </div>
      ))}
      <button onClick={()=>setStatus(alert("Hello alex"))}>click</button>
    </>
  )
}
export default Reuse_com_arrlist;

import React from 'react'
import Table from 'react-bootstrap/Table';
export default function HandleArrayobjects() {
    const students = [
       {
        Name : 'Dinesh',
        RollNo :  'four',
        Class : 'Mca'
       },
       {
        Name : 'Raju',
        RollNo : 'five',
        Class : 'B.tec'
       }
    ]
  return (
    <div>   
      {/* You can not use for loop to display array list,because its not allows to render in dom
          thatswhy map() function use here
      */}
        {
            students.map((data)=>
                // <h1>{data.Name} {data.RollNo}  {data.Class}</h1>
                
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>RollNo</th>
          <th>Class</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td >{data.Name}</td>
          <td>{data.RollNo}</td>
          <td>{data.Class}</td>
        </tr>
      </tbody>
      </Table>
                
            )
        }  
    </div>
  )
}

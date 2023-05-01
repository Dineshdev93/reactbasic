import React from "react";
import { Table } from "react-bootstrap";
export default function Han_nes_arr_with_nes_mapfun() {
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
  ];
  return (
    <div>
      <Table variant="dark">
        <tbody>
          <tr>
            <td>S.N.</td>
            <td>Name</td>
            <td>E-mail</td>
            <td>Address</td>
          </tr>
          {student.map((data,i) => (
            <tr key={i}>
              <td>{i+1}</td>
              <td>{data.Name}</td>
              <td>{data.email}</td>
              <td>
                {data.Address.map((item,j) => (
                  <tr key={j}>
                    <td>{j+1}</td>
                    <td>{item.Hn}</td>
                    <td>{item.city}</td>
                  </tr>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

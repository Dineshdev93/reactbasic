import React from "react";
import { Table } from "react-bootstrap";
const HandleArraylistwithuniquekey = () => {
  const company = [
    { Name: "Triber", Price: 765000, country: "France" },
    { Name: "Maruti", Price: 456000, country: "India" },
    { Name: "Bmw", Price: 1765000, country: "Amerika" },
  ];
  return (
    <div>
      <h1>Array list with bootstrap and unique key</h1>
      <Table variant="dark">
        <tbody>
          <tr>
            <td>Sr No.</td>
            <td>Company</td>
            <td>Price</td>
            <td>Country</td>
          </tr>

          {company.map((data,i) => (
            data.Name === "Triber" ? <tr key={i} >
              <td > {data.Name}</td>
              <td >{data.Price}</td>
              <td >{data.country}</td>
            </tr>:null
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default HandleArraylistwithuniquekey;

import React, { useState } from "react";
import Create from "./create";
import { useEffect } from "react";
import axios from "axios";
import EmployeeInfo from "./EmployeeInfo";
function Home() {
  const [employees, setemployees] = useState([]);
  console.log("🚀 ~ Home ~ employees:", employees);
  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setemployees(result.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="home">
      <h2>Employee list</h2>
      <Create />
      {employees.length === 0 ? (
        <div>
          <h2>No Record</h2>
        </div>
      ) : (
        <table>
          <tr>
            <th>FirstName</th>
            <th>Lastname</th>
            <th>Email</th>
          </tr>
          {employees.map((employee) => (
            <EmployeeInfo employee={employee} />
          ))}
        </table>
      )}
    </div>
  );
}

export default Home;

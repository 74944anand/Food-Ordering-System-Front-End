import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  employeeId: Number;
  employeeName: string;
  employeeGender: string;
  employeeSalary: Number;
  employeeDob: Date;
}
const Cart = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("http://localhost:5195/api/Employee")
      .then((data) => setUsers(data.data));
  }, []);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Salary</th>
            <th>Dob</th>
          </tr>
        </thead>

        {users.map((user) => (
          <tr>
            <td>{user.employeeId}</td>
            <td>{user.employeeName}</td>
            <td>{user.employeeGender}</td>
            <td>{user.employeeSalary}</td>
            <td>{user.employeeDob}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Cart;

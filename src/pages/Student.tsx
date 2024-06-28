import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IStudent } from "../interface/Student";
import "./Students.scss";

const Student: React.FC = () => {
  const [allStudent, setAllStudent] = useState<IStudent[]>();
  useEffect(() => {
    const Student = JSON.parse(localStorage.getItem("students  ") as string);
    setAllStudent(Student);
    console.log("Student data ", Student);
  }, []);

  return (
    <>
      <button title="CreateStudent" className="create_button">
        <Link to="/student/create-student">Create student</Link>
      </button>

      <table>
        <thead>
          <tr>
            <td>SN.</td>
            <td>Name</td>
            <td>Age</td>
            <td>Phone Number</td>
            <td>Email ID</td>
          </tr>
        </thead>
        <tbody>
          {allStudent?.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </tbody>
              
      </table>
    </>
  );
};

export default Student;

import React from "react";
import "./style.css";

function ResultTableBody(props) {
  return (
    <tbody>
      <tr>
        <td>{props.profileImage}</td>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
        <td>{props.dob}</td>
        <td>{props.age}</td>
      </tr>
    </tbody>
  );
}

export default ResultTableBody;

import React from "react";
import "style.css";

function ResultTableHead(props) {
  return (
    <thead>
      <tr>
        <th className="table-header" scope="col">
          Profile Image
        </th>
        <th className="table-header" scope="col" onClick={props.userSort}>
          First Name
        </th>
        <th className="table-header" scope="col" onClick={props.userSort}>
          Last Name
        </th>
        <th className="table-header" scope="col" onClick={props.userSort}>
          Email Address
        </th>
        <th className="table-header" scope="col" onClick={props.userSort}>
          Phone Number
        </th>
        <th className="table-header" scope="col" onClick={props.userSort}>
          D.O.B
        </th>
        <th className="table-header" scope="col" onClick={props.userSort}>
          Age
        </th>
      </tr>
    </thead>
  );
}

export default ResultTableHead;

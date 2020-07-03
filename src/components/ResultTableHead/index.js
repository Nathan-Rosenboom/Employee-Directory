import React from 'react';

function ResultTableHead(props) {
    return (
        <thead>
            <tr>
                <th scope="col">Profile Image</th>
                <th scope="col" onClick = {props.userSort}>First Name</th>
                <th scope="col" onClick = {props.userSort}>Last Name</th>
                <th scope="col" onClick = {props.userSort}>Email Address</th>
                <th scope="col" onClick = {props.userSort}>Phone Number</th>
                <th scope="col" onClick = {props.userSort}>D.O.B</th>
                <th scope="col" onClick = {props.userSort}>Age</th>
            </tr>
        </thead>
    );
}

export default ResultTableHead;
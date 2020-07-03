import React from 'react';

function ResultTableHead(props) {
    return (
        <thead>
            <tr>
                <th scope="col">Profile Image</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email Address</th>
                <th scope="col">Phone Number</th>
                <th scope="col">D.O.B</th>
            </tr>
        </thead>
    );
}

export default ResultTableHead;
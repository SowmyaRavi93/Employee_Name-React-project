import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className= "UserOutput">
            <p> Name : {props.userName}</p>
            <p> 'XYZ' employee</p>
        </div>
    )
};

export default UserOutput;
import React from 'react';

import './User.css';

const User = props => {

    return (
        <p className="user">{props.username} ({props.age} Years Old)</p>
    );
};

export default User;
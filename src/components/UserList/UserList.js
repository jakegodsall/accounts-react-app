import React from 'react';

import Card from '../UI/Card/Card';
import User from '../User/User';

const UserList = props => {
    console.log(props.users);
    return (
        <Card>
            {props.users.map(user => {
                return (
                    <User 
                    name={user.name}
                    age={user.age}
                    key={user.id}
                />
                );
            })}
        </Card>
        
    );
};

export default UserList;
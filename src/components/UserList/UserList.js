import React from 'react';

import Card from '../UI/Card/Card';
import User from '../User/User';

const UserList = () => {
    return (
        <Card>        
            <User name="Max" age="31" />
            <User name="Max" age="31" />
        </Card>
        
    );
};

export default UserList;
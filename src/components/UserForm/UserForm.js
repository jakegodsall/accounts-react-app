import React, { useState } from 'react';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';

import './UserForm.css';

const UserForm = props => {

    const [username, setUsername] = useState('');
    const [userAge, setUserAge] = useState('');

    const usernameChangedHandler = e => {
        setUsername(e.target.value);
    }

    const ageChangedHandler = e => {
        setUserAge(e.target.value);
    }

    const formHandler = e => {
        e.preventDefault();

        const user = {
            username: username,
            age: userAge,
            id: Math.random().toString()
        };

        props.onSubmitForm(user);

        setUsername('');
        setUserAge('');
    };

    return (
        <Card>
            <form className="user-form" onSubmit={formHandler}>
                <div className="user-form__row">
                    <label className="user-form__label">Username</label>
                    <input className="user-form__input" type="text" value={username} onChange={usernameChangedHandler} />
                </div>
                <div className="user-form__row">
                    <label className="user-form__label">Age (Years)</label>
                    <input className="user-form__input" type="text" value={userAge} onChange={ageChangedHandler} />
                </div>
                <Button buttonContent="Add User"></Button>
            </form>
        </Card>
    );
};

export default UserForm;
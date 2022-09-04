import React from 'react';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';

import './UserForm.css';


const UserForm = props => {

    return (
        <Card>
            <form className="user-form">
                <div className="user-form__row">
                    <label className="user-form__label">Username</label>
                    <input className="user-form__input" type="text" />
                </div>
                <div className="user-form__row">
                    <label className="user-form__label">Age (Years)</label>
                    <input className="user-form__input" type="text" />
                </div>
                <Button buttonContent="Add User"></Button>
            </form>
        </Card>
    );
};

export default UserForm;
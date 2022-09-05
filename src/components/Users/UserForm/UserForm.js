import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import ErrorModal from '../../UI/Modal/ErrorModal';

import './UserForm.css';

const UserForm = props => {
	const [username, setUsername] = useState('');
	const [userAge, setUserAge] = useState('');
	const [error, setError] = useState(false);

	const usernameChangedHandler = e => {
		setUsername(e.target.value);
	};

	const ageChangedHandler = e => {
		setUserAge(e.target.value);
	};

	const formHandler = e => {
		e.preventDefault();
		if (username.trim().length === 0 || userAge.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty values)',
			});
			return;
		}

		if (+userAge < 1) {
			setError({
				title: 'Invalid age',
				message: 'Please enter a valid age (>0)',
			});
			return;
		}
		const user = {
			username: username,
			age: userAge,
			id: Math.random().toString(),
		};
		props.onSubmitForm(user);
		// reset form inputs
		setUsername('');
		setUserAge('');
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card>
				<form
					className='user-form'
					onSubmit={formHandler}
				>
					<div className='user-form__row'>
						<label
							className='user-form__label'
							htmlFor='username'
						>
							Username
						</label>
						<input
							className='user-form__input'
							type='text'
							id='username'
							value={username}
							onChange={usernameChangedHandler}
						/>
					</div>
					<div className='user-form__row'>
						<label
							className='user-form__label'
							htmlFor='age'
						>
							Age (Years)
						</label>
						<input
							className='user-form__input'
							type='number'
							id='age'
							value={userAge}
							onChange={ageChangedHandler}
						/>
					</div>
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</>
	);
};

export default UserForm;

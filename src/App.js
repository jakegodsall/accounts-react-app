import React, { useState } from 'react';

import UserForm from './components/Users/UserForm/UserForm';
import UserList from "./components/Users/UserList/UserList";

import './App.css';

const USERS = [
  {
    username: 'Jake',
    age: 27,
    id: 1
  },
  {
    username: 'Patrycjo',
    age: 27,
    id: 2
  },
  {
    username: 'Nunu',
    age: 4,
    id: 3
  }
];

const App = () => {

  const [users, setUsers] = useState(USERS);

  const onSubmitForm = (userData) => {
    setUsers(prevUsers => {
      return [userData, ...prevUsers]
    });

    console.log(users);
  };

  return (
    <>
      <UserForm onSubmitForm={onSubmitForm} />
      <UserList users={users}/>
    </>
    
  );
};

export default App;
import React from 'react';

import UserForm from './components/UserForm/UserForm';
import UserList from "./components/UserList/UserList";

import './App.css';

const users = [
  {
    name: 'Jake',
    age: 27,
    id: 1
  },
  {
    name: 'Patrycjo',
    age: 27,
    id: 2
  },
  {
    name: 'Nunu',
    age: 4,
    id: 3
  }
];

const App = () => {
  return (
    <>
      <UserForm />
      <UserList users={users}/>
    </>
    
  );
};

export default App;
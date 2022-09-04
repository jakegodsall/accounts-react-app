import React from 'react';

import UserForm from './components/UserForm/UserForm';
import UserList from "./components/UserList/UserList";

import './App.css';


const App = () => {
  return (
    <>
      <UserForm />
      <UserList />
    </>
    
  );
};

export default App;
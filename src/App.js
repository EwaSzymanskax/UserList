import React, { useState } from 'react';

import AddUser  from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import { v4 as uuid } from 'uuid';



function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
    return [...prevUsersList, {name: uName, age: uAge, id: uuid()}];
    })
  };

  const deleteUser = (id) => {
    setUsersList((prevUsersList)=> {
      const newUsersList = prevUsersList.filter(user => user.id !== id)
      return newUsersList

    })
}

  return (
    <div>
      <AddUser onAddUser={addUserHandler} usersList={usersList} />
      <UsersList users={usersList} deleteUser={deleteUser}/>

    </div>
  );
}

export default App;

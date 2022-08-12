import React from 'react';

import Card from '../UI/Card';
import classes from './UsersList.module.css';
import UserItem from './UserItem';

const UsersList = (props) => {
    const {users, deleteUser} = props;
    return (
        <Card className={classes.users}>
            {users.length > 0 ? 
            <ul>
                {users.map((user,index) => (
                    <UserItem key={user.id} user={user} deleteUser={deleteUser} number={index}/>
                ))}
            </ul> : null}
         </Card>
    );
};

export default UsersList;
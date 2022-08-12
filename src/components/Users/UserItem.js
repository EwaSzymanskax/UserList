import React from "react";
import classes from './UserItem.module.css';

const UserItem = (props) => {
    const {user, deleteUser, number} = props
    return (
    <li className={classes.li}>
        <div> {number+1}. {user.name} ({user.age} years old) </div>
    <button className={classes.button} onClick={()=>deleteUser(user.id)}>X</button>
     </li>
    )
}

export default UserItem;
import React from "react";

const UserItem = (props) => {
    const {user, deleteUser, number} = props
    return (
    <li>
     {number+1}. {user.name} ({user.age} years old) 
     <button onClick={()=>deleteUser(user.id)}>X</button>
     </li>
    )
}

export default UserItem;
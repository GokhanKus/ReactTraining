import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from './redux/userSlice';
import User from './redux/User';


function UserList() {

    const { users } = useSelector(store => store.user);
    console.log(users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, [])

    return (
        <>
            <div>UserList</div>
            <div>
                {
                    users && users.map((user) => (
                        <User key={user.id} user={user} />
                    ))
                }
            </div>
        </>
    )
}

export default UserList
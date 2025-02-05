import React from 'react'

function User({ user }) {
    const { name, email } = user;
    return (
        <div>{name} -- {email}</div>
    )
}

export default User
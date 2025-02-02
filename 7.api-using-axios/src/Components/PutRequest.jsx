import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const BASE_URL = "http://localhost:3000";

function PutRequest() {

    const updateUser = async (userId, updatedUser) => {
        await axios.put(`${BASE_URL}/users/${userId}`, updatedUser)
    }

    useEffect(() => {
        const updatedUser = {
            "username": "gokhan",
            "email": "gokhan@outlook.com"
        }
        updateUser("1", updatedUser);
    }, [])

    return (
        <div>PutRequest</div>
    )
}

export default PutRequest
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'


const BASE_URL = "http://localhost:3000";

function PostRequest() {

    const createUser = async (newUser) => {
        await axios.post(BASE_URL + "/users", newUser)
    }

    useEffect(() => {
        const newUser = {
            "username": "Irmak1433",
            "email": "irmak@outlook.com"
        }
        createUser(newUser);
    }, [])

    return (
        <div>PostRequest</div>
    )
}

export default PostRequest
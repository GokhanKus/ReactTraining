import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'


const BASE_URL = "http://localhost:3000";

function GetRequest() {
    const getAllUsers = async () => {
        const response = await axios.get(BASE_URL + "/users");
        console.log(response.data);
    }

    const getUserById = async (userId) => {
        const response = await axios.get(`${BASE_URL}/users/${userId}`)
        console.log(response.data);
    }

    useEffect(() => {
        // getAllUsers();
        getUserById(2);
    }, [])

    return (
        <div>

        </div>
    )
}

export default GetRequest
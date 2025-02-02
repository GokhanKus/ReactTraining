import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const BASE_URL = "http://localhost:3000";

function DeleteRequest() {

    const deleteUser = async (userId) => {
        await axios.delete(`${BASE_URL}/users/${userId}`)
    }

    useEffect(() => {
        deleteUser("050b");
    }, [])

    return (
        <div>DeleteRequest</div>
    )
}

export default DeleteRequest
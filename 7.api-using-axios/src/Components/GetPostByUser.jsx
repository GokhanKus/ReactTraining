import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const BASE_URL = "http://localhost:3000";

function GetPostByUser() {

    const getUserById = async (userId) => {
        const response = await axios.get(`${BASE_URL}/users/${userId}`);
        return response.data.postId;
    }
    const getPostById = async (postId) => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/" + postId)
        return response.data;
    }
    const getPost = async () => {
        const postId = await getUserById(1);
        const postData = await getPostById(postId);
        console.log(postData);
    }

    useEffect(() => {
        getPost();
    })

    return (
        <div>GetPostByUser</div>
    )
}

export default GetPostByUser
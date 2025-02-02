import { useEffect, useState } from 'react'
import './App.css'
import GetRequest from './Components/GetRequest';
import PostRequest from './Components/PostRequest';
import PutRequest from './Components/PutRequest';
import DeleteRequest from './Components/DeleteRequest';
import GetPostByUser from './Components/GetPostByUser';

function App() {

  return (
    <>
      {/* <GetRequest /> */}
      {/* <PostRequest /> */}
      {/* <PutRequest /> */}
      {/* <DeleteRequest /> */}
      <GetPostByUser />
    </>
  )
}

export default App
/*
npm install json-server ile sanal db api
db.json dosyasi
npx json-server .\src\db.json   
npm install axios ile api istekleri atma..
*/
import { useEffect, useState } from 'react'
import './App.css'
import GetRequest from './GetRequest';
import PostRequest from './PostRequest';
import PutRequest from './PutRequest';

function App() {

  return (
    <>
      {/* <GetRequest /> */}
      {/* <PostRequest /> */}
      <PutRequest />
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
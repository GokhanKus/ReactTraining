import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counterSlice';
import UserList from './UserList';

function App() {
  const { value } = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  console.log(value);
  return (
    <>

      <div>{value}</div>
      <div>
        <button onClick={() => dispatch(increment())}>Arttir: </button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>Azalt: </button>
      </div>

      <UserList />
    </>
  )
}

export default App
/*
slice icerisindeki statelere erismek icin useSelector;
slice icerisindeki metotlara erismek icin useDispatch kullanilir
*/

import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {

  const [todoList, setTodoList] = useState([]);

  const createTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]); //onceden olan todo'lari aç sonra newTodo'yu ekle
  }
  console.log(todoList);
  return (
    <div className='App'>
      <div className='main'>
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList todoList={todoList} />
      </div>
    </div >
  )
}

export default App
//redux ve context api bilmedigim icin simdilik props drilling (proplar ile veri tasima..) 
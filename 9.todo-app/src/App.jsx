import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {

  const [todoList, setTodoList] = useState([]);

  const createTodo = (newTodo) => {
    debugger
    setTodoList([...todoList, newTodo]); //onceden olan todo'lari aç sonra newTodo'yu ekle
  }

  const removeTodo = (todoId) => {
    const extractedArray = [...todoList.filter((todo) => todo.id !== todoId)];
    setTodoList(extractedArray);
  }

  const updateTodo = (newTodo) => {
    const updatedTodos = todoList.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    })
    setTodoList([...updatedTodos]);
  }


  console.log(todoList);
  return (
    <div className='App'>
      <div className='main'>
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
      </div>
    </div >
  )

}
export default App
//redux ve context api bilmedigim icin simdilik props drilling (proplar ile veri tasima..) 
import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { FaRegCheckSquare } from "react-icons/fa";

import '../App.css'

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {

  const { id, content } = todo

  const [editable, setEditable] = useState(false);
  //edite basinca bu state ile baslangictaki degeri alip guncelleyecegiz
  const [newTodo, setNewTodo] = useState(content);

  const removeTodo = () => {
    onRemoveTodo(id);
  }

  const updateTodo = () => {
    const request = {
      id: id,
      content: newTodo
    }
    onUpdateTodo(request);
    setEditable(false);
  }

  return (
    <div className='todo-box'>
      <div>
        {
          editable ?
            <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
              className='todo-input' type='text' placeholder='Todo giriniz' />
            :
            content
        }
      </div>
      <div>
        <IoIosRemoveCircle className='todo-icons' onClick={removeTodo} />
        {
          editable ?
            <FaRegCheckSquare className='todo-icons' onClick={updateTodo} /> :
            <MdEdit className='todo-icons' onClick={() => setEditable(true)} />
        }
      </div>
    </div>
  )
}

export default Todo
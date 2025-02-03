import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import '../App.css'

function Todo({ todo }) {
  const { id, content } = todo
  return (
    <div className='todo-box'>
      <div>
        {content}
      </div>
      <div>
        <IoIosRemoveCircle className='todo-icons' />
        <MdEdit className='todo-icons' />
      </div>
    </div>
  )
}

export default Todo
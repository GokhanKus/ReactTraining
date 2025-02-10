import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todoSlice';
import { TodoType } from '../types/Types';


function TodoCreate() {

    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState<string>('');

    const handleCreateTodo = () => {
        if (newTodo.trim().length == 0) {
            alert("todo giriniz!");
            return;
        }
        const payload: TodoType = {
            id: Math.floor(Math.random() * 9999999),
            content: newTodo
        }
        dispatch(createTodo(payload))
        setNewTodo('');
    }

    return (
        <div className='todo-create-box'>
            <input className='todo-input' value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} type='text' placeholder='todo giriniz' />
            <button onClick={handleCreateTodo} className='todo-create-button'>Olustur</button>
        </div>
    )
}

export default TodoCreate
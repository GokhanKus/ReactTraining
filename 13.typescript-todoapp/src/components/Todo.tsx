import React, { useState } from 'react'
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodo } from '../redux/todoSlice';

interface TodoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {

    const { id, content } = todoProps;
    const dispatch = useDispatch();

    const [editable, setEditable] = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState<string>(content);

    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id));
    }

    const handleUpdateTodo = () => {
        const payload: TodoType = {
            id: id,
            content: newTodo
        }
        dispatch(updateTodo(payload));
        setEditable(false);
    }

    return (
        <div className='todo'>
            {
                editable ?
                    <input type='text'
                        style={{ width: '400px', border: 'none', borderBottom: '1px solid lightgrey', outline: 'none' }}
                        value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} /> :
                    <div>{content}</div>
            }
            <div>
                <IoIosRemoveCircleOutline onClick={handleRemoveTodo} className='icons' style={{ marginRight: '5px' }} />
                {
                    editable ?
                        <CiCircleCheck onClick={handleUpdateTodo} className='icons' /> :
                        <CiEdit onClick={() => setEditable(true)} className='icons' />
                }
            </div>
        </div>
    )
}

export default Todo
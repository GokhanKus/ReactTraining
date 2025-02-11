import React from 'react'
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById } from '../redux/todoSlice';

interface TodoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {

    const { id, content } = todoProps;
    const dispatch = useDispatch();

    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id));
    }

    return (
        <div className='todo'>
            <div>{content}</div>
            <div>
                <IoIosRemoveCircleOutline onClick={handleRemoveTodo} className='icons' style={{ marginRight: '5px' }} />
                <CiEdit className='icons' />
            </div>
        </div>
    )
}

export default Todo
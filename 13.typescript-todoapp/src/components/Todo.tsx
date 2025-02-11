import React from 'react'
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { TodoType } from '../types/Types';

interface TodoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {
    const { id, content } = todoProps;
    return (
        <div className='todo'>
            <div>{content}</div>
            <div>
                <IoIosRemoveCircleOutline className='icons' style={{ marginRight: '5px' }} />
                <CiEdit className='icons' />
            </div>
        </div>
    )
}

export default Todo
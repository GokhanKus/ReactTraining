import React from 'react'
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";

function Todo() {
    return (
        <div className='todo'>
            <div>First Todo</div>
            <div>
                <IoIosRemoveCircleOutline className='icons' style={{ marginRight: '5px' }} />
                <CiEdit className='icons' />
            </div>
        </div>
    )
}

export default Todo
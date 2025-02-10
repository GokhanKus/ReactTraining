import React from 'react'

function TodoCreate() {
    return (
        <div className='todo-create-box'>
            <input className='todo-input' type='text' placeholder='todo giriniz' />
            <button className='todo-create-button'>Olustur</button>
        </div>
    )
}

export default TodoCreate
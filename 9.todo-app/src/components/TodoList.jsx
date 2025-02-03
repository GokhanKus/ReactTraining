import React from 'react'
import Todo from './Todo'

function TodoList({ todoList, onRemoveTodo, onUpdateTodo }) {
    return (
        <div style={{ width: '100%', marginTop: '50px' }}>
            {
                todoList && todoList.map((todo) => (
                    <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} />
                ))
            }
        </div>
    )
}

export default TodoList
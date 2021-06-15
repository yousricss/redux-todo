import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTask, deleteTask } from '../js/action/taskAction'

const TaskItem = ({todo}) => {
    const dispatch = useDispatch()
    return (
        <div className="task">
            <div style={{textDecoration: todo.isDone ? "line-through" : null}}>{todo.task}</div>
            <button onClick= {() => dispatch(completeTask(todo.id)) }>{todo.isDone ? "Undo" : "Complelte"}</button>
            <button>edit</button>
            <button onClick={()=> dispatch(deleteTask(todo.id))}>delete</button>
        </div>
    )
}

export default TaskItem

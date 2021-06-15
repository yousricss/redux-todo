import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "../type"

export const addTask = (newTask) => {
    return{
        type:ADD_TASK,
        payload:newTask
    }
}
export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload:id
})
export const completeTask = (id) => ({
    type: COMPLETE_TASK,
    payload:id
})
export const editTask = (id,value) => ({
    type: EDIT_TASK,
    payload:{id,value}
})



import React, {createContext, useState } from "react"
import { clientAxios } from "../../config/clientAxios"



const TaskContext = createContext()


const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])

    const getTasks = async () => {
        try {
            const { data } = await clientAxios.get("/tasks")
            setTasks(data.tasks)
            console.log("a")
        } catch (error) {
            console.error(error);
        }
    }

    const deleteTask = async (id) =>{
        try {
            const { data } = await clientAxios.delete(`/tasks/${id}`)

            const tasksFiltered = tasks.filter((task) => task.id !== id);

            setTasks(tasksFiltered)

        } catch (error) {  
            console.error(error);
        }

    }

    return (
        <TaskContext.Provider
            value={{
                tasks,
                getTasks,
                deleteTask
            }}
        >
            {children}
        </TaskContext.Provider>
    )

    
}

export { TaskProvider }

export default TaskContext
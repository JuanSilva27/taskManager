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
            console.log("hola")
        }
    }

    return (
        <TaskContext.Provider
            value={{
                tasks,
                getTasks
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}

export { TaskProvider }

export default TaskContext
import React, { Children, createContext, useState } from "react"
import { clientAxios } from "../../config/clientAxios"


const TaskContext = createContext()


const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])

    const getTasks = async () => {
        try {
            const { data } = await clientAxios.get("/tasks")
            setTasks(data.tasks)
        } catch (error) {
            console.error(error);
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
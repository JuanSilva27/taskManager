import React, {createContext, useState } from "react"
import { clientAxios } from "../../config/clientAxios"
import axios from "axios"


const TaskContext = createContext()


const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])

    const getTasks = async () => {
        try {
            /* const { data } = await axios.get("http://localhost:3000/api/tasks")
            setTasks(data.tasks) */
            const response = await fetch("http://localhost:3000/api/tasks");
            if (!response.ok) {
                throw new Error("Error al obtener las tareas");
            }
            const data = await response.json();
            setTasks(data.tasks);
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
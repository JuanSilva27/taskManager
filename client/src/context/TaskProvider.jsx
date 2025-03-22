import React, {createContext, useState } from "react"
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

    const storeTasks = async (task) => {
        try {
            console.log(task)
            if(task.id) {
                const { data } = await clientAxios.put(
                    `/tasks/${task.id}`,
                     task
                
            )

                const tasksUpdated = tasks.map ((t)=>{
                if (t.id === data.task.id) {
                    return data.task
                }

                return t
                 })

                setTasks(tasksUpdated)
                   
            } else {
                const {data} = await clientAxios.post(`/tasks`, task)
                setTasks([...tasks, data.task])
            }
            
        } catch (error) {
            console.log(error)
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
                storeTasks,
                deleteTask
            }}
        >
            {children}
        </TaskContext.Provider>
    )

    
}

export { TaskProvider }

export default TaskContext
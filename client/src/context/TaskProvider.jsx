import React, { createContext, useState } from "react"
import { clientAxios } from "../../config/clientAxios"
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

const TaskContext = createContext()


const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState({})
    const [alert, setAlert] = useState({})
    const navigate = useNavigate()


    const showAlert = (msg, time = true) => {
        setAlert({
            msg,
        })

        if (time) {
            setTimeout(() => {
                setAlert({})
            }, 2000)
        }
    }

    const getTasks = async () => {
        try {
            const { data } = await clientAxios.get("/tasks")
            setTasks(data.tasks)
        } catch (error) {
            console.error(error);
            showAlert(
                error.resoponse ? error.response.data.msg : "ups hubo un error",
                false
            );
        }
    }

    const getTask = async (id) => {
        try {
            const { data } = await clientAxios.get(`/tasks/${id}`)
            setTask(data.task)
        } catch (error) {
            console.log(error)
            showAlert(
                error.resoponse ? error.response.data.msg : "ups hubo un error",
                false
            )
        }
    }

    const storeTask = async (task) => {
        try {
            console.log(task)
            if (task.id) {
                const { data } = await clientAxios.put(
                    `/tasks/${task.id}`,
                    task

                )

                const tasksUpdated = tasks.map((t) => {
                    if (t.id === data.task.id) {
                        return data.task
                    }

                    return t
                })

                setTask(tasksUpdated)

            } else {
                const { data } = await clientAxios.post(`/tasks`, task)
                setTasks([...tasks, data.task])
            }

            navigate('/')

        } catch (error) {
            console.log(error)
            showAlert(
                error.resoponse ? error.response.data.msg : "ups hubo un error",
                false
            )
        }
    }

    const deleteTask = async (id) => {
        try {
            const { data } = await clientAxios.delete(`/tasks/${id}`)

            const tasksFiltered = tasks.filter((task) => task.id !== id);

            setTasks(tasksFiltered)

            Toast.fire({
                icon: "success",
                title: data.msg,
            });

        } catch (error) {
            console.error(error);
            showAlert(
                error.resoponse ? error.response.data.msg : "ups hubo un error",
                false
            )
        }

    }

    return (
        <TaskContext.Provider
            value={{
                alert,
                showAlert,
                tasks,
                getTasks,
                task,
                getTask,
                storeTask,
                deleteTask
            }}
        >
            {children}
        </TaskContext.Provider>
    )


}

export { TaskProvider }

export default TaskContext
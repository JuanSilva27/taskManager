import { Button } from './Button';
import { useForm } from '../hooks/useForm';
import useTasks from '../hooks/useTasks';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export const FormTask = () => {
    const { storeTask, task, getTask } = useTasks()
    const { formValues, handleInputChange, setFormValues, reset } = useForm(
        {
            title: "",
            description: "",
            createdAt: "",
            completed: false,

        }
    )
    const { id } = useParams()
    const location = useLocation()
    let { title, description, createdAt, completed } = formValues

    useEffect(() => {
        if (id && Object.keys(task).length === 0) {
            getTask(id)
        } else {
            reset()
        }
    }, [id, getTask])


    useEffect(() => {
        if (task && Object.keys(task).length > 0) {

            setFormValues({
                title: task.title || '',
                description: task.description || '',
                createdAt: task.createdAt || '',
                completed: task.completed || false
            })
        }
    }, [task, setFormValues])

    useEffect(() => {
        if (!id) {
            reset()
        }
    }, [location.pathname])

    const handleSubmit = (e) => {

        e.preventDefault()
        if ([title, description, createdAt].includes("") || completed === undefined) {
            return null
        }
        storeTask({
            id: id ? id : null,
            title,
            description,
            createdAt,
            completed
        })
        console.log("2")
    }
    return (
        <form
            className="bg-white py-5 px-5 md:w-4/4 lg:w-3/4 rounded-md border-2"
            onSubmit={handleSubmit}
        >
            <div className='mb-5'>
                <label
                    htmlFor="name"
                    className="text-gray-700 uppercase font-bold text-sm"
                >
                    Titulo de la tarea
                </label>

                <input
                    id='title'
                    type="text"
                    placeholder='Titulo de la tarea'
                    className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={title}
                    name='title'
                    onChange={handleInputChange}
                />
            </div>

            <div className='my-5'>
                <label
                    htmlFor="description"
                    className='text-gray-700 uppercase font-bold text-sm'
                >
                    Descripcion

                </label>

                <input
                    id='description'
                    type="text"
                    placeholder='Descripcion de la tarea'
                    className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={description}
                    name='description'

                    onChange={handleInputChange}
                />

            </div>

            <div className='my-5'>
                <label
                    htmlFor="createdAt"
                    className='text-gray-700 uppercase font-bold text-sm'
                >
                    Fecha de creacion

                </label>

                <input
                    id="createdAt"
                    type="date"
                    className='border w-full p-2 mt-2 rounded-md'
                    value={createdAt}
                    name='createdAt'

                    onChange={handleInputChange}
                />
            </div>

            <div className='my-5 flex justify-between items-center'>
                <label
                    htmlFor="completed"
                    className='text-gray-700 uppercase font-bold text-sm'
                >
                    Tarea completada:

                </label>

                <input
                    id='completed'
                    type="checkbox"
                    className='w-5 h-5 accent-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-200  p-2  rounded-md'
                    name='completed'
                    checked={completed}
                    onChange={handleInputChange}
                />

            </div>

            <Button text={id ? 'Actualizar' : 'Guardar'} />

        </form>
    );
};

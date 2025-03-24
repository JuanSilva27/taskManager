import React, { useEffect } from 'react';
import useTasks from '../hooks/useTasks';
import { Link, useParams } from 'react-router-dom';

export const Task = () => {
    const { id } = useParams()
    const { getTask, task } = useTasks()
    const { title, description, createdAt, completed } = task

    useEffect(() => {
        getTask(id)
    }, [id])

    return (
        <>
            <div className='flex justify-between'>
                <h1 className='text-4x1 uppercase font-bold'>{title}</h1>
                <Link to={`/edit_task/${id}`} className='flex justify-center items-center gap-2 text-gray-500 hover:text-black uppercase font-bold'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832
19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863
4.487zm0 0L19.5 7.125"
                        />
                    </svg>
                    <p>Editar</p>
                </Link>
            </div>
            <div className="flex justify-between">
            <h2 className="text-2xl uppercase font-bold text-gray-600">
              {description}
            </h2>
            <p>Fecha de creacion: {createdAt}</p>
          </div>
            <hr className="border-b border-gray-600" />
            <p>{completed? "Completado" : "Sin completar"}</p>

        </>
    );
};

import React from 'react';
import { Link } from 'react-router-dom';
import useTasks from '../hooks/useTasks';
export const TaskPreview = ({ title, description, createdAt, id }) => {
    const { deleteTask } = useTasks()

    const handleDelete = () => {
        deleteTask(id)
    }

    return (
        <div  class=" flex items-center justify-center">
            <div class="w-full max-w-md px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800 mx m">
                <div class="flex items-center justify-end">
                    <span class="px-3 py-1 text-xs text-green-800 uppercase bg-green-200 rounded-full dark:bg-green-300 dark:text-green-900">completado</span>
                </div>
                <Link to={`/tasks/${id}`}>
                <h1 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
                    {title}
                </h1>
                <p>
                    {description}
                </p>

                <p>
                    {createdAt}
                </p>
                </Link>

                <div class="flex items-center justify-between mt-4">
                    <Link to={`/edit_task/${id}`} className="uppercase text-sm text-gray-400 hover:text-gray-800 font-bold">editar tarea</Link>

                    <div className="uppercase text-sm text-red-300 hover:text-red-600 font-bold">

                        <button onClick={()=> handleDelete(id)} className='uppercase font-bold'>
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
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107
1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0
01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12
.562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-
1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09
2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                            </svg>


                        </button>

                    </div>
                </div>
            </div>

        </div>

    );
};


import React from 'react';
import { Link } from 'react-router-dom';
export const TaskPreview = ({title, _id, description, date }) => {
    return (
        <Link to={`/projects/1`} className='grid grid-cols-2'>
            <div class="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
                <div class="flex items-center justify-end">
                    <span class="px-3 py-1 text-xs text-green-800 uppercase bg-green-200 rounded-full dark:bg-green-300 dark:text-green-900">completado</span>
                </div>
                <h1 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
                   {title}
                </h1>
                <p>
                    {description}
                </p>

                <p>
                    dd/mm/aaaa
                </p>
                <div class="flex items-center justify-between mt-4">
                    <Link to={`/projects/edit/${_id}`} className="uppercase text-sm text-gray-400 hover:text-gray-800 font-bold">editar tarea</Link>

                    <Link to={`/projects/delete/${_id}`} className="uppercase text-sm text-gray-400 hover:text-gray-800 font-bold">eliminar tarea</Link>
                </div>
            </div>

        </Link>

    );
};


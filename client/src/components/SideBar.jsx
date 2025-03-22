import React from 'react';
import { Link } from 'react-router-dom';

export const SideBar = () => {
    return (
        <aside className='md:w-80 px-5 py-10 bg-red-300'>
            <p className='text-xl font-bold'>Hola:</p>
            <Link to="add_task" className="bg-green-600 w-full p-3 text-white uppercase font-bold rounded-md block mt-5 text-center">Nueva tarea</Link>
        </aside>
    );
};

 
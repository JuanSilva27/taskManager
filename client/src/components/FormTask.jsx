import React from 'react';
import { Button } from './Button';

export const FormTask = () => {
    return (
        <form action="" className="bg-white py-5 px-5 md:w-4/4 lg:w-3/4 rounded-md border-2">
            <div className='mb-5'>
                <label
                    htmlFor="name"
                    className="text-gray-700 uppercase font-bold text-sm"
                >
                    Titulo de la tarea
                </label>

                <input
                    id='tittle'
                    type="text"
                    placeholder='Titulo de la tarea'
                    className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={"TITULO"}
                    name='tittle'
                    ref={null}
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
                    value={"description"}
                    name='description'
                    ref={null}
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
                    value={"1996-03-12"}
                    name='createdAt'
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
                />

            </div>

            <Button text={"Guardar"}/>

        </form>
    );
};

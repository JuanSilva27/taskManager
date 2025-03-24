import React from 'react';
import { FormTask } from '../components/FormTask';

export const TaskEdit = () => {
    return (
        <div>
            <h1 className="text-green-600 font-black text-4xl capitalize">Editar tarea</h1>
            <div className='mt-10 flex justify-center'>
                <FormTask></FormTask>
            </div>
        </div>
    );
};


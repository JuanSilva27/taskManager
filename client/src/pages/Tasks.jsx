import React, { useEffect } from 'react';
import { useTasks } from '../hooks/useTasks';
import { TaskPreview } from '../components/TaskPreview';

export const Tasks = () => {

    const {tasks, getTasks} = useTasks()

    useEffect(()=>{
        getTasks()
    }, [])

    console.log(tasks)

    return (
        <div className='grid grid-cols-2'>
            {tasks.length > 0 ? (
                tasks.map((task) => (
                    <div className='m-2'>
                        <TaskPreview key={task.id} {...task} />
                    </div>
                ))
            ) : (
                <p>No hay tareas disponibles</p>
            )}
        </div>
    );
};


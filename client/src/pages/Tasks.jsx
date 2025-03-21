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
        <div>
            {tasks.length > 0 ? (
                tasks.map((task) => (
                    <TaskPreview key={task.id} {...task} />
                ))
            ) : (
                <p>No hay tareas disponibles</p>
            )}
        </div>
    );
};


import React, { useEffect } from 'react';
import { useTasks } from '../hooks/useTasks';

export const Tasks = () => {

    const {tasks, getTasks} = useTasks()

    useEffect(()=>{
        getTasks()
    }, [])

    return (
        <div>
            
        </div>
    );
};


import React, { useContext } from 'react';
import TaskContext from '../context/TaskProvider';

export const useTasks = () => {
    return useContext(TaskContext)
};


export default useTasks
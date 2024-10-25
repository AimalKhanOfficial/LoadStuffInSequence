'use client'
import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';
import { useRef } from 'react';

export default function LoadStuff() {
    const tasks = [
        (next) => <Task1 next={next} />,
        (next) => <Task2 next={next} />,
        (next) => <Task3 next={next} />,
    ];

    const loadTasks = (index) => {
        if (index < tasks.length) {
            const response = tasks[index](() => loadTasks(index + 1));
            console.log('>> loading', index, response)
            return response;
        }
        return null;
    };

    return (
        <>
            {loadTasks(0)} {/* Start loading tasks sequentially */}
        </>
    );

    // const tasks = [Task1, Task2, Task3];
    // const renderTask = () => {
    //     const TaskComponent = tasks[currentTask.current];
    //     return <TaskComponent next={() => {
    //         currentTask.current += 1;
    //         renderTask(); // Load the next task when done
    //     }} />;
    // };
    
    // return <>{renderTask()}</>;
}
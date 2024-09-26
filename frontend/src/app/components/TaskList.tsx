"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';


interface Task{
    name: string;
    id: number
    completed: boolean
    description: string
}

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading,setLoading] = useState<boolean>(true)
    const [error,setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTasks = async() =>{
            try{
                const response = await axios.get('http://localhost:8082/api/task')
                
                setTasks(response.data)
            } catch(error){
                setError('Failed to fetch tasks')
            } finally{
                setLoading(false)
            }
        }
        fetchTasks()
    },[])

    if(loading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>{error}</p>
    }

        return (
            <>
            <div>
                <h1>task list</h1>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>{task.name} {task.description}</li>
                    ))}
                </ul>
            </div>
            
            
            </>
            )

}

export default TaskList
"use client"
import { useState } from "react"
import axios from 'axios';

interface Task{
    name: string;
    id: number
    completed: boolean
    description: string
}


export default function GetTaskId() {
    const [id,setID] = useState<string>('')
    const [task,setTask] = useState<Task | null>(null)
    



   async function handleGet(id:string){
        const response = await axios.get('http://localhost:8082/api/task/'+id)
        setTask(response.data)
    }


    return(
        <>
            <h1>Get Task Id</h1>
            <div className="flex flex-col w-40">
                <input type="text"  onChange={(e) => setID(e.target.value)}/>
                <button onClick={() => handleGet(id)}>Get</button>
            </div>

            {task && (
                <div>
                    <h3>{task.name}</h3>
                    <p>{task.description}</p>
                </div>
            )}
        </>
    )
}
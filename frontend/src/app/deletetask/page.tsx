"use client"
import { useState } from "react";
import axios from 'axios';


export default function DeleteTask() {
    const [id, setId] = useState<string>('')

    function handleSubmit(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault()

        try {
            const response = axios.delete(`http://localhost:8082/api/task/${id}`)
        } catch (error) {
            console.log(error);
            
        }
    }
    return (
        <div>
            <h1>Delete Task</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">ID</label>
                <input type="text" id="id" name="id" onChange={(e) => setId(e.target.value)}/>
                <button>Delete</button>
            </form>
        </div>
    );
}
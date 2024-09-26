"use client"
import { useState } from "react"



export default function PostTask(){
    const [name,setName] = useState<string>('')
    const [description,setDescription] = useState<string>('')

    async function handleSubmit(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault()

        const response = await fetch('http://localhost:8082/api/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                description
            })
        })

        console.log(response);
        
    
    }

    return (
        <>
            <h1>Post tasks</h1>
            <form onSubmit={handleSubmit} className="flex flex-col w-40">
                <label htmlFor="name">Name</label>
                <input type="Name" onChange={(e) => setName(e.target.value)} className="border-2"/>
                <label htmlFor="description">Description</label>
                <input type="Description" onChange={(e) => setDescription(e.target.value)} className="border-2"/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}


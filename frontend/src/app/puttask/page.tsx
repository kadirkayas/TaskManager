"use client"
import axios from "axios"
import { useState } from "react"

export default function PutTask() {
    const [id, setId] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    async function handleSubmit(event:React.FormEvent<HTMLFormElement>){
        console.log(id, name, description);

        event.preventDefault()  

        const response = await axios.put(`http://localhost:8082/api/task/${id}`, {
            name: name,
            description: description,
            completed: true
        })
    }

    return (
        <>
            <form className="flex flex-col w-40" onSubmit={handleSubmit}>
                <label htmlFor="id"></label>
                <input type="text" name="id" id="" onChange={(e) => setId(e.target.value)} />
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="description">Description</label>
                <input type="text" id="description" name="description" onChange={(e) => setDescription(e.target.value)}/>
            <button>Put</button>
            </form>
        </>
    )
}
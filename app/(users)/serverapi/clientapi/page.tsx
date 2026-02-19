"use client";

import { useState } from "react";

const ClientApiPage = () => {
    const[name, setName] = useState("");
    const handleSubmit = async () => {
        const response = await fetch("/api/apifetch", {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name })
        })
        const data = await response.json();
        if(response.ok) {
            alert(data.message);
        } else {
            alert("Data insertion failed");
        }
        console.log(data);
    }
    return (
        <div>
           <input className="border-2 border-gray-300 p-2 rounded-md" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
           <button className="bg-blue-500 text-white p-2 rounded-md ml-10" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default ClientApiPage;
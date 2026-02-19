'use client';
import { useEffect, useState } from "react";

const Jokes = () => {
    const [joke, setJoke] = useState<any>(null);
    const[showJoke, setShowJoke] = useState(false);

    useEffect(() => {
        fetchRandonJokes();
        return () => {
            setJoke(null);
        }
    },[])
    const fetchRandonJokes = async () => {
        try {
            const response = await fetch("https://official-joke-api.appspot.com/random_joke");
            const data = await response.json();
            setJoke(data);
            console.log(data, "data");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="flex  items-center justify-center h-screen">
            <div className="flex flex-col py-10 gap-4 bg-amber-700 shadow-md px-4 border-2 border-white rounded-md w-80 min-h-50 max-h-80">
            <p>{joke?.setup}</p>
            {showJoke ? (
                <button className="bg-red-500 text-white p-2 rounded-md" onClick={() => setShowJoke(false)}>Show Joke</button>
            ) : (
                <div>
                <p className="text-white bg-black p-2 my-2 rounded-md">{joke?.punchline}</p>
                <button className="bg-blue-500 text-white p-2 rounded-md w-full" onClick={() => setShowJoke(true)}>Hide Joke</button>
                </div>
            )}
            <button className="bg-green-500 text-white p-2 rounded-md" onClick={() => fetchRandonJokes()}>Next Joke</button>
            </div>
        </div>
    )
}
export default Jokes;
"use client";
import Link from "next/link";


const NotFound = () => {
    return (
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="flex border-2 border-white flex-col bg-red-500 items-center justify-center gap-4 p-10 rounded-md">
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <Link href="/" className="bg-blue-500 text-white p-2 rounded-md">Go to Home</Link>
                </div>
            </div>
    )
}

export default NotFound;
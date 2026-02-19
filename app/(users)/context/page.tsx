'use client'
import { contextAction } from "./contextAction";
import GetDetailData from "./getdetail/maindetail";
import { useState } from "react";


const ContextPage = () => {
    const [showDetail, setShowDetail] = useState(false);
    const handleShowDetail = () => {
        setShowDetail(true);
    }
    return (
        <>
        <div className="w-full h-full bg-gray-50 text-black  flex flex-col items-center justify-center overflow-y-auto">
            <h1 className="text-2xl font-bold text-purple-500 shadow-blue-600 pb-6">Get In Touch</h1>
            <form action={contextAction}>
        <div className="w-100 flex flex-col gap-4 items-center justify-center px-5 border border-purple-950 py-10 rounded-md">
            <div className="flex flex-col justify-center justify-between w-full gap-2 shadow-blue-900">
                <label className="text-black font-bold shadow-blue-600" htmlFor="name">Name</label>
                <input name="name" className="bg-purple-50 border border-gray-700 rounded-md p-2" type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="flex flex-col justify-center justify-between w-full gap-2">
                <label className="text-black font-bold shadow-blue-600" htmlFor="email">Email</label>
                <input name="email" className="bg-purple-50 border border-gray-700 rounded-md p-2" type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col justify-center justify-between w-full gap-2">
                <label className="text-black font-bold shadow-blue-600" htmlFor="password">Meggage</label>
               <textarea name="message" className="bg-purple-50 border border-gray-700 rounded-md p-2 h-20" id="password" placeholder="Enter your message" />
            </div>
            <div className="w-full mt-6">
                <button type="submit" className="border bg-purple-500 text-white rounded-md p-2 w-full">Submit</button>
            </div>
        </div>
        </form>
        </div>
        <div className=" bg-gray-50 text-black">
        <button onClick={handleShowDetail} className="border bg-purple-500 p-2 text-white rounded-md px-10 mb-20">Show me Detail</button>
        {showDetail && <GetDetailData />}
    </div>
    </>
    )
}

export default ContextPage;
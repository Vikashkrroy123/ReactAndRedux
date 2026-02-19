"use client";

import { adduser } from "@/app/action";
const SecondMethodPage = () => {
    return (
        <div>
           <form action={adduser}>
            <input type="text" placeholder="Enter your name" name="name" />
            <button type="submit">Submit</button>
           </form>
        </div>
    )
}

export default SecondMethodPage;
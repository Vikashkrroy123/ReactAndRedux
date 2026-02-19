"use server";
import { db } from "@/config/db";
export const adduser = async (formData: FormData) => {
    const name = formData.get('name');
    console.log(name, 'vikash');
    db.execute('INSERT INTO grop_by (name) VALUES (?)', [name]);
    // return json({ message: "User added successfully" });
}   
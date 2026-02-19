'use server'
import {db} from '../../../config/db';
export const contextAction = async(formData) => {
    const {name, email, message} = Object.fromEntries(formData.entries());
    try {
        const [result] = await db.execute('INSERT INTO main_context (name, email, message) VALUES (?, ?, ?)', [name, email, message]);
        console.log(result, 'result');
    } catch (error) {
        console.log(error, 'error');
    }
}
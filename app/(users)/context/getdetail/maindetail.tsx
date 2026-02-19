'use server'

import { db } from "@/config/db";
const GetDetailData = async () => {
    const [data] = await db.execute('SELECT * FROM main_context');
    return (
        <div className="w-full h-full bg-gray-50 text-black  flex flex-col items-center justify-center overflow-y-auto">
            <table className="w-full h-full bg-gray-50 text-black  flex flex-col items-center justify-center overflow-y-auto">
                <thead> 
                    <tr className="text-black text-center">
                        <th className="border border-gray-700 p-2">Name</th>
                        <th className="border border-gray-700 p-2">Email</th>
                        <th className="border border-gray-700 p-2">Message</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: any) => (
                        <tr key={item.id} className="text-black text-center">
                            <td className="border border-gray-700 p-2">{item.name}</td>
                            <td className="border border-gray-700 p-2">{item.email}</td>
                            <td className="border border-gray-700 p-2">{item.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default GetDetailData;
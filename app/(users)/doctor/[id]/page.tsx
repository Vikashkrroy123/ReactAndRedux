import { db } from "@/config/db";

export async function generateStaticParams() {
    const [data] = await db.execute('SELECT id FROM grop_by');
    return data?.map((item: any) => ({ id: item.id.toString() }));
}

const DoctorPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const [data] = await db.execute('SELECT * FROM grop_by where id = ?', [id]);
    console.log(data, 'data');
    return (
        <div className="w-full bg-zinc-50 overflow-y-auto">
            <h1 className="text-center font-bold text-black">Doctor Page</h1>
            {/* <p className="text-center text-lg font-bold">Doctor ID: {id}</p> */}
           <table className="bg-gray-200 items-center justify-center text-black w-full min-h-[120px] h-full">
            <thead className="sticky top-1">
                <tr className="text-center bg-purple-300 h-12 border-b border-b-green-700"> 
                    <th>ID</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Joining Date</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item: any, index: number) => (
                    <tr key={index} className="text-center mt-10   odd:bg-white even:bg-gray-200 hover:bg-purple-300">
                        <td>{item?.id}</td>
                        <td>{item?.name}</td>
                        <td>{item?.department}</td>
                        <td>{item?.salary}</td>
                        <td>{new Date(item?.joining_date).toLocaleDateString()}</td>
                    </tr>
                ))}
            </tbody>
           </table>
        </div>
    )
}

export default DoctorPage;
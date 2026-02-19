import { db } from "@/config/db";
const StaticPage = async() => {
    const [data] = await db.execute('SELECT * FROM grop_by order by name desc');
    return (
        <div>
         <ul>
            {data.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
         </ul>
        </div>
    )
}

export default StaticPage;
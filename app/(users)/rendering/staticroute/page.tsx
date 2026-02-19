import { db } from '@/config/db';
// make the static conetnt to ISR (Incremental Static Regeneration)
export const revalidate = 10;
// 10 means revalidate the page every 10 seconds
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
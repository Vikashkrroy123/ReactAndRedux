import { db } from "@/config/db";
import {cache} from 'react';

export const dynamic = 'force-dynamic';
const DynamicPage = async() => {
    const childData = await getData();
    return (
        <div>
         <ChildComponent />
        </div>
    )
}

export default DynamicPage;

async function ChildComponent() {
const childData = await getData();
    return (
        <div>
            <ul>
                {childData.map((item: any) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

const getData = cache(async () => {
    const [data] = await db.execute('SELECT * FROM grop_by order by name desc');
    console.log('dynamic_data');
    return data;
});
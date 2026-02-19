'use client';
import { use } from 'react';
// import {useParams} from 'next/navigation';

const dynamicRoute = (props: {params: {username: string}}) => {
    const {username} = use(props.params);
    console.log(username, 'vikash');
    return (
        <div>
            <h1>Dynamic Route</h1>
            <p>Username: {username}</p>
        </div>
    )
}
export default dynamicRoute;
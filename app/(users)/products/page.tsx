// const Products = async (props) => {
//     const {id=55, page=1, name='product'} = await props.searchParams;
//     return (
//         <>
//         <h2>Search Param</h2>
//         <p>ID: {id}</p>
//         <p>Page: {page}</p>
//         <p>Name: {name}</p>
//         </>
//     )
// }
// export default Products;
'use client';
import Product from './Product';
import { use } from 'react';
const Products =  (props: {searchParams: {id: number, page: number, name: string}}) => {
    const {id=55, page=1, name='product'} = use(props.searchParams);
    return (
        <>
        <Product />
        <h2>Search Param</h2>
        <p>ID: {id}</p>
        <p>Page: {page}</p>
        <p>Name: {name}</p>
        </>
    )
}
export default Products;
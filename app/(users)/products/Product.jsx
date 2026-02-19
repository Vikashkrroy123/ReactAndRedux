'use client';
import { useParams, useSearchParams } from 'next/navigation';

 const Product = () => {
    const param = useParams();
    console.log(param, 'vikash');
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const page = searchParams.get('page');
    const name = searchParams.get('name');
    return (
    <>
    <div>Product</div>
    <p>ID: {id}</p>
    <p>Page: {page}</p>
    <p>Name: {name}</p>
    </>
  )
}

export default Product;
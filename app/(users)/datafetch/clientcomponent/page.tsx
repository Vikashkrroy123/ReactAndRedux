
//CLIENT SIDE COMPONENT

'use client';

type searchParamsType = {
    searchParams: {
        name: string;
    }
}
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
// const ServerComponent = async ({searchParams}:searchParamsType) => {
    const ServerComponent = () => {
    // const {name} = await searchParams;
    const searchParams = useSearchParams();
    const [data, setData] = useState<any>(null);
    const name = searchParams.get('name');
    const[loading, setLoading] = useState(false);
   useEffect(() => {
     getData();
     return () => {
        setData(null);
     }
   }, [name]);

   const getData = async () => {
  try {
    setLoading(true);
    const response = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await response.json();
    setData(data);
  } catch (error) {
    console.log(error);
  }finally{
    setLoading(false);
  }

   }
   if(loading){
    return <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center gap-2 text-center bg-gray-400 animate-pulse  p-6 justify-center rounded-md w-60 h-80 border-2 border-yellow-500 overflow-auto">
            <h1 className="text-2xl font-bold text-white">Loading...</h1>
        </div>
    </div>
   }
    if(!name){
        return <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-center gap-2 text-center  p-6 justify-center rounded-md w-60 h-80 border-2 border-yellow-500 overflow-auto">
                <h1 className="text-2xl font-bold text-gray-600">Please enter a name</h1>
            </div>
        </div>
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-center gap-2  p-6 rounded-md w-60 h-80 border-2 border-yellow-500 overflow-auto"
            style={data?.gender === 'male' ? { backgroundColor: 'black' } : { backgroundColor: 'pink',
                color: 'white'
             }}
            >
                <div className="flex items-center justify-center rounded-full h-25 w-25 border-2 border-yellow-500">
                <Image src="/srk.jpg" alt="Vikash Kumar Ray" width={100} height={100} className="rounded-full h-full w-full" />
                </div>
                <span className="text-lg font-bold text-white truncate max-w-full" title={data?.name}>{data?.name}</span>
                <div className="w-30 flex items-center gap-2 justify-center rounded-full text-center py-1 border-2 border-yellow-500 text-yellow-300 text-sm font-bold bg-amber-900"><span className="rounded-full w-1 h-1 bg-red-500"></span><span className="text-yellow-300 capitalize truncate">{data?.gender}</span></div>
                <div className="flex w-full flex-col gap-2 items-center justify-center">
                    <div className="flex items-center justify-between w-full">
                    <span className="text-sm text-white">💪 ConFidence</span>
                    <span className="text-sm text-white">{data?.probability*100}%</span>
                    </div>
                    <div className={`flex items-center justify-between h-4 bg-gray-300 rounded-full w-full`}>
                        <span className="h-full rounded-full bg-yellow-400" style={{ width: `${data?.probability*100}%` }}></span>
                    </div>
                </div>
                <button className="bg-yellow-500 text-white p-1 border-2 border-yellow-500 shadow-md shadow-yellow-500 hover:bg-transparent hover:text-yellow-500 transition-all duration-300 w-full rounded-md">{data?.count}</button>
                </div>
            
        </div>
    );
};
export default ServerComponent;
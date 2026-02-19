"use client";
import { useEffect, useState, useRef } from "react";
import ChildComponent from "./ChildComponent";

type Post = {
  id: number;
  title: string;
  body: string;
};

const ClientComponent = () => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

const getData = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const result = await response.json();
        setData(result);
        console.log(result);
    }catch(error){
        console.error("API Error:", error);
    }finally{
        setLoading(false);
    }
}
const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getData();
    return () => console.log("unmount");
  }, []);

  const getMoreData = async () => {
    getData();
    }

  return (
    <div className="flex flex-col items-center gap-10 h-full overflow-y-auto">
      <div className="flex gap-2 tems-center sticky top-0 h-full bg-black w-full">
        <h1 className="text-xl font-semibold">
          Show me the Client Component
        </h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={getMoreData}
        >
          Click Me
        </button>
        <ChildComponent ref={childRef} />
        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => childRef?.current?.onFocus()}>Focus child component</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => childRef?.current?.onClear()}>Clear child component</button> */}
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full max-w-4xl border border-gray-300 h-full flex flex-col">
  
        {/* TABLE HEADER */}
        <table className="w-full border-collapse">
          <thead className="bg-gray-600 text-white">
            <tr>
              <th className="border px-4 py-3 w-16">ID</th>
              <th className="border px-4 py-3 w-1/4">Title</th>
              <th className="border px-4 py-3">Body</th>
            </tr>
          </thead>
        </table>
      
        {/* SCROLLABLE BODY */}
        <div className="flex flex-col h-full w-full overflow-y-auto">
          <table className="w-full table-fixed border-collapse">
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.id}
                  className="odd:bg-red-500 even:bg-black text-white"
                >
                  <td className="border px-4 py-2 w-16">{item.id}</td>
                  <td className="border px-4 py-2 w-1/4">{item.title}</td>
                  <td className="border px-4 py-2">{item.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      
      </div>
      
      )}
      <div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item) => (
                <li className="bg-yellow-500  p-4 rounded-md hover:bg-yellow-600" key={item.id}>{item.title}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ClientComponent;

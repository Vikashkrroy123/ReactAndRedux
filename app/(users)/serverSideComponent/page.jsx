const ServerSideComponent = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return (
        <div className="flex flex-col items-center p-6 h-full overflow-y-auto gap-10">
            <h1>Server Side Component</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {data.map((item) => (
                    <li className="bg-yellow-500  p-4 rounded-md hover:bg-yellow-600" key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default ServerSideComponent;
const Loading = () => {
    return (
        <div className="loading-section">
        <h1>Loading...</h1>
        <div className="flex justify-center items-center h-screen">
            <div className="flex bg-gray-500 animation-reactangle flex-col items-center gap-2 text-center  p-6 justify-center rounded-md w-60 h-80 border-2 border-yellow-500 overflow-auto">
                <h1 className="text-2xl font-bold text-white">Loading...</h1>
            </div>
        </div>
        </div>
    )
}
export default Loading;
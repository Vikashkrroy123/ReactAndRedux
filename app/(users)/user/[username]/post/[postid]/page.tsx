const dynamicRoute = async(props) => {
    const {username, postid} = await props.params;
    console.log(username, postid);
    return (
        <div>
            <h1>Dynamic Route</h1>
            <p>Username: {username}</p>
            <p>Post ID: {postid}</p>
        </div>
    )
}
export default dynamicRoute;
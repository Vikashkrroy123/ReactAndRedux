const dynamicRoute = async(props) => {
    console.log(props);
    const {username, postid, childid} = await props.params;
    console.log(username, postid, childid);
    return (
        <div>
            <h1>Dynamic Route</h1>
            <p>Username: {username}</p>
            <p>Post ID: {postid}</p>
            <p>Child ID: {childid}</p>
        </div>
    )
}
export default dynamicRoute;
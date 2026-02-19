const Blog = async(props: { params: { sblog: string } }) => {
    const {sblog} = await props.params;
    console.log(sblog, 'vikash');

    return (
        <div>Blog</div>
    )
}

export default Blog;
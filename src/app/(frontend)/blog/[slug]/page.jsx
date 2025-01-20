export default function Blog({params}){
    let page = '';
    const blogSlug = params.slug;
    return (
        <>
            <h1>Blog: [{blogSlug}]</h1>
        </>
    );
}
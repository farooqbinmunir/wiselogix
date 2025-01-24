export default function NewsPost({post, cls="", style={}}) {
    return (
        <div className={`${cls} post`} style={style}>
            <div className="postBox">
                <div className="postTop">
                    <div className="imgBox">
                        <div className="tags">{post.tags}</div>
                        <div className="date">{post.date}</div>
                    </div>
                    <div className="infoBox">
                        <h3><a href="#">{post.title}</a></h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
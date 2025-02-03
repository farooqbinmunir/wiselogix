export default function Events_Post({post, cls=""}) {
    let categories = '';
    post.eventCategories.nodes.map((c, i) => {
        (() => {
            if(i === 0){
                return categories += c.name;
            }else{
                return categories += `, ${c.name}`;
            }
        })()
        
    });
    return (
        <div className="post_story post story" data-id={post.databaseId}>
            <div className="terms-sec">{categories}</div>
            <div className="img-sec">
                <img loading="lazy" decoding="async" width="1024" height="683" src={post.featuredImage.node.sourceUrl} />
            </div>
            <div className="title-sec">
                <h3 className="hr_story_title"><a href={post.uri} className="hr_story_title_link">{post.title}</a></h3>
            </div>
        </div>
    );
}
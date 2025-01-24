export default function HR_Post({post, cls=""}) {
    return (
        <div className="post_story post story" data-id={post.id}>
            <div className="terms-sec">{post.terms}</div>
            <div className="img-sec">
                <img loading="lazy" decoding="async" width="1024" height="683" src={post.img} />
            </div>
            <div className="title-sec">
                <h3 className="hr_story_title"><a href="#" className="hr_story_title_link">{post.title}</a></h3>
            </div>
        </div>
    );
}
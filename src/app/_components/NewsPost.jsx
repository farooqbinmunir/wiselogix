import Link from "next/link";
export default function NewsPost({post, cls="", style={}}) {
    let categories = '';
    post.terms.nodes.map((cat, index) => {
        (() => {
            if(index === 0){
                return categories += `${cat.name}`;
            }else{
                return categories += `, ${cat.name}`;
            }
        })();
    });

    const dateString = post.date;
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();

    const formattedDate = `${day.toString().padStart(2, '0')} ${month}, ${year}`;
    return (
        <div className={`${cls} post`} style={style} data-id={post.databaseId}>
            <div className="postBox">
                <div className="postTop">
                    <div className="imgBox">
                        <div className="tags">{categories}</div>
                        <div className="date">{formattedDate}</div>
                    </div>
                    <div className="infoBox">
                        <h3><Link href={post.uri}>{post.title}</Link></h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
import NewsPost from "./NewsPost";
import client from '../../../config.js';
export default async function Slider_News({cls="", style={}}) {
    const newsPostsQuery = `{
        posts(first: 10) {
            nodes {
                databaseId
                title
                uri
                date
                excerpt(format: RAW)
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
                terms {
                    nodes {
                        ... on Category {
                            name
                            uri
                        }
                    }
                }
            }
        }
    }`;
    const {posts: {nodes: newsPosts}} = await client.request(newsPostsQuery);
    return (
        <>
        <div id="slider_news_component" className={`${cls} slider_news_component fl-html`} style={style}>
            <div className="slider-header">
                <div className="slider-dot slider-dot-news"></div>
                <div className="slider-ctl slider-ctl-news"></div>
            </div>
            <div className='post-wedget carrousel carrousel-news'>
                {newsPosts.map((post, index) => <NewsPost key={index} post={post} />)}
            </div>
        </div>
        </>
    )
}
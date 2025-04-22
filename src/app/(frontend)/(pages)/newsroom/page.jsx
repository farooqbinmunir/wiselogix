import Link from 'next/link';
import Image from 'next/image';
import BannerGlobal from "../../../_components/BannerGlobal";
import client from '../../../../../config.js';

export const metadata = {
    title: "Newsroom - Wiselogix Technologies",
    description: "Lorem ipsum dolor sitm...",
};
export default async function Newsroom(){
    let postsQuery = `{
        posts {
            nodes {
                title
                slug
                date
                terms {
                    nodes {
                        ... on Category {
                            name
                            link
                        }
                    }
                }
            }
        }
    }`;

    const {posts: {nodes}} = await client.request(postsQuery);

    return(
        <>
        <main id="fl-main-content" className="fl-page-content">
            <div className="fl-content-full container">
                <div className="row">
                    <div className="fl-content col-md-12">
                        <div className="section_pad blog_banner_section">
                            <div className="banner_text_part">
                                <h1>Press and Media Room</h1>
                                <p>Real stories from the frontlines of ending the injustice of poverty for women and girls.</p>
                            </div>
                            <div className="banner_mata_part">
                                <div className="logo_part">
                                    <img src="assets/images/black-logo.png" alt="" />
                                </div>
                                <div className="reach_us_part">
                                    <h2>Media Inquiries</h2>
                                    <p>
                                        <strong>John Doe</strong><br />
                                        <a href="mailto:info@gmail.com" className="mail-link">info@gmail.com</a><br />
                                        <a href="tel:+123456789">+123456789</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="section_pad blogs_section">
                            <div className="blogs_item_wrap">
                                {nodes.map((post, index) => {
                                    const dateStr = post.date;
                                    const date = new Date(dateStr);
                                    const options = { year: 'numeric', month: 'long', day: 'numeric' };
                                    const formattedDate = date.toLocaleDateString('en-US', options);

                                    return (
                                        <div className="blogs_item" key={index}>
                                            <div className="blogs_meta">
                                                <div className="blog_link">
                                                    <Link href="javascript:void(0)" className="press-release" rel="tag">{post.terms.nodes[0].name}</Link>
                                                </div>
                                                <div className="blog_date">{formattedDate}</div>
                                            </div>
                                            <div className="blogs_title">
                                                <h3>
                                                    <Link href={`/newsroom/${post.slug}`} className="post_link" rel="tag">{post.title}</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="show_blogs_btn">
                                <button>Load More...</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}
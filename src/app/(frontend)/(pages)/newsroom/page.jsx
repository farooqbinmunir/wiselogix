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
                link
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
                                {nodes.map((post, index) => (
                                    <div className="blogs_item" key={index}>
                                        <div className="blogs_meta">
                                            <div className="blog_link">
                                                <Link href={post.terms.nodes[0].link} className="press-release" rel="tag">{post.terms.nodes[0].name}</Link>
                                            </div>
                                            <div className="blog_date">January 15, 2025</div>
                                        </div>
                                        <div className="blogs_title">
                                            <h3>
                                                <Link href={post.link} className="post_link" rel="tag">{post.title}</Link>
                                            </h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="show_blogs_btn">
                                <button>Load More...</button>
                            </div>
                        </div>
                        <div className="footer_above_section">
                            <div className="section_pad get_involved_section">
                                <div className="section_heading">
                                    <h2>
                                        Other Ways To Get Involved
                                    </h2>
                                </div>
                                <div className="involved_icon_section_wrap">
                                    <div className="involved_icon_item">
                                        <div className="involved_icon">
                                            <i className="icon-oxfam-icon-heart-2" aria-hidden="true"></i>
                                        </div>
                                        <div className="involved_text">
                                            <a href="#">Volunteer</a>
                                        </div>
                                    </div>
                                    <div className="involved_icon_item">
                                        <div className="involved_icon">
                                            <i className="icon-oxfam-icon-lightbulb" aria-hidden="true"></i>
                                        </div>
                                        <div className="involved_text">
                                            <a href="#">Fundraise For Oxfam</a>
                                        </div>
                                    </div>
                                    <div className="involved_icon_item">
                                        <div className="involved_icon">
                                            <i className="icon-oxfam-icon-dollar-circle" aria-hidden="true"></i>
                                        </div>
                                        <div className="involved_text">
                                            <a href="#">Donate</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="oxfam_sharing_container">
                                <h2 id="page_social_share_header">Share this page:</h2>
                                <ul aria-labelledby="page_social_share_header">
                                    <li>
                                        <a href="#" target="_blank">
                                            <span className="sr-only">Share to Facebook (opens in new window)</span>
                                            <i className="fab fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <span className="sr-only">Share to Twitter (opens in new window)</span>
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" data-enc-email="" target="_blank" className="mail-link" data-wpel-link="ignore">
                                            <span className="sr-only">Share via email (opens in new window)</span>
                                            <i className="fas fa-envelope"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}
import Link from 'next/link';
import Image from 'next/image';
import Donate_Button from '../../../../_components/Donate_Button';
import client from '../../../../../../config.js';

export const metadata = {
    title: "Single Newsroom - Wiselogix Technologies",
    description: "Lorem ipsum dolor sitm...",
};
export default async function SingleNewsroom({params}){
    const {slug} = await params;
    let SingleNewsroomQuery = `{
        post(id: "${slug}", idType: SLUG) {
            databaseId
            title(format: RAW)
            excerpt(format: RAW)
            content
            featuredImage {
                node {
                    sourceUrl
                }
            }
        }
    }`;

    const {post} = await client.request(SingleNewsroomQuery);

    return(
        <>
            <main id="fl-main-content" className="fl-page-content">
            <div className="fl-content-full container">
                <div className="row">
                    <div className="fl-content col-md-12">
                        <div className="section_pad banner_section" data-page_id={post?.databaseId} style={post?.featuredImage?.node?.sourceUrl ? {backgroundImage: `url(${post?.featuredImage?.node?.sourceUrl})`} : {}}>
                            <div className="section_heading">
                                <h1>{post?.title}</h1>
                                <p>{post?.excerpt}</p>
                            </div>
                            <div className="banner_button"> 
                                <Donate_Button />
                            </div>
                        </div>
                        <div className="section_pad blogs_section single_blog_section">
                            {post?.content && (
                                <div className="blogs_item_wrap" dangerouslySetInnerHTML={{__html: post?.content}}></div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}
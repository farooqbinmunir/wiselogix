import Link from 'next/link';
import Donate_Button from './Donate_Button';
import client from '../../../config.js';

export default async function BannerGlobal({pageSlug}){

    const bannerQuery = `{
        page(id: "${pageSlug}", idType: URI) {
            databaseId
            featuredImage {
                node {
                    sourceUrl
                }
            }
            bannerGlobal {
                bannerHeading
                bannerDesc
            }
        }
    }`;
    const {page} = await client.request(bannerQuery);
    return (
        <>
        <div className="section_pad banner_section" data-page_id={page.databaseId} style={{
            backgroundImage: `url(${page.featuredImage.node.sourceUrl})`
        }}>
            <div className="section_heading">
                <h1>{page.bannerGlobal.bannerHeading}</h1>
                <p>{page.bannerGlobal.bannerDesc}</p>
            </div>
            <div className="banner_button">
                <Donate_Button />
            </div>
        </div>
        </>
    );
}
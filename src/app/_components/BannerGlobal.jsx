"use client"; // Mark this as a client component

import { useEffect, useState } from "react";
import Donate_Button from "./Donate_Button";
import client from "../../../config.js";

export default function BannerGlobal({ pageSlug }) {
    const [bannerData, setBannerData] = useState(null);
    const [bgImage, setBgImage] = useState({});

    useEffect(() => {
        const fetchBannerData = async () => {
            try {
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
                const { page } = await client.request(bannerQuery);
                setBannerData(page);

                if (page?.featuredImage?.node?.sourceUrl) {
                    setBgImage({ backgroundImage: `url(${page.featuredImage.node.sourceUrl})` });
                }
            } catch (error) {
                console.error("Error fetching banner data:", error);
            }
        };

        fetchBannerData();
    }, [pageSlug]);

    return (
        <div className="section_pad banner_section" data-page_id={bannerData?.databaseId} style={bgImage}>
            <div className="section_heading">
                <h1>{bannerData?.bannerGlobal?.bannerHeading}</h1>
                <p>{bannerData?.bannerGlobal?.bannerDesc}</p>
            </div>
            <div className="banner_button">
                <Donate_Button />
            </div>
        </div>
    );
}




// import Link from 'next/link';
// import Donate_Button from './Donate_Button';
// import client from '../../../config.js';

// export default async function BannerGlobal({pageSlug}){

//     const bannerQuery = `{
//         page(id: "${pageSlug}", idType: URI) {
//             databaseId
//             featuredImage {
//                 node {
//                     sourceUrl
//                 }
//             }
//             bannerGlobal {
//                 bannerHeading
//                 bannerDesc
//             }
//         }
//     }`;
//     const {page} = await client.request(bannerQuery);
//     const imgURL = page?.featuredImage?.node?.sourceUrl ? page?.featuredImage?.node?.sourceUrl : false;
//     let bgImage = {};
//     if(imgURL){
//         bgImage = {
//             backgroundImage: `url(${imgURL})`
//         };
//     }
//     return (
//         <>
//         <div className="section_pad banner_section" data-page_id={page?.databaseId} style={bgImage}>
//             <div className="section_heading">
//                 <h1>{page?.bannerGlobal?.bannerHeading}</h1>
//                 <p>{page?.bannerGlobal?.bannerDesc}</p>
//             </div>
//             <div className="banner_button">
//                 <Donate_Button />
//             </div>
//         </div>
//         </>
//     );
// }
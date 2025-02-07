import client from '../../../config.js';
import Button from './Button';
export default async function Section_Joius({cls="", style={}}){
    // const joinusQuery = `query FooterBottomHTML {
	// 	pages(where: {id: 42}) { # Page id for (Custom Data) page, all custom data we'll get from this page using ACF
	// 		edges {
	// 			node {
	// 				customData {
	// 					joinUsBannerHtml
	// 				}
	// 			}
	// 		}
	// 	}
	// }`;
	// const {pages: {edges} } = await client.request(joinusQuery);
	// const joinusHTML = edges[0]?.node?.customData?.joinUsBannerHtml;
    return (
        <>
            {/* <div id="section_joinus" dangerouslySetInnerHTML={{__html: joinusHTML}} className="fl-row fl-row-full-width fl-row-bg-color fl-node-45nyhi8qz6lx fl-row-default-height fl-row-align-center joinus-form" cdata-node="45nyhi8qz6lx"></div> */}
        </>
    );
}
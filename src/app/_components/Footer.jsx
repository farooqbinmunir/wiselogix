import Link from 'next/link';
import Image from 'next/image';
import Donate_Button from "./Donate_Button";
import GetInvolved from "./GetInvolved";
// import client from '../../../config.js';

export default async function Footer() {

	// // /* Footer Social Links */
	// const socialIconsQuery = `query socialIcons {
	// 	themeSettings {
	// 		frontEndSettings {
	// 			socialMediaProfileUrls {
	// 				facebookLink
	// 				instagramLink
	// 				linkdinLink
	// 				tiktolkLink
	// 				twitterLink
	// 			}
	// 		}
	// 	}
	// }`;
	// const {themeSettings: {frontEndSettings: {socialMediaProfileUrls: socialLink}}} = await client.request(socialIconsQuery);
	// /* end Footer Social Links */

	// /* Footer Bottom Data Fetching */
	// const contactDetailsQuery = `{
	// 	themeSettings {
	// 		frontEndSettings {
	// 			contactInformation {
	// 				contactAddress
	// 				contactEMail
	// 				contactPhone
	// 			}
	// 		}
	// 	}
	// }`;
	// const {themeSettings: {frontEndSettings: {contactInformation}}} = await client.request(contactDetailsQuery);
	// /* end Footer Contact Details */

	// /* Footer Useful Links */
	// const usefulLinksQuery = `{
	// 	menu(id: "5", idType: DATABASE_ID) {
	// 		menuItems {
	// 			edges {
	// 				node {
	// 					uri
	// 					label
	// 				}
	// 			}
	// 		}
	// 	}
	// }`;
	// const {menu: {menuItems: {edges: linkItems}}} = await client.request(usefulLinksQuery);

	// const col_3_query = `{
	// 	themeSettings {
	// 		frontEndSettings {
	// 			footerColumn3 {
	// 				footerColumn3Desc
	// 				footerLogo {
	// 					node {
	// 						sourceUrl
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// }`;
	// const {themeSettings: {frontEndSettings: {footerColumn3}}} = await client.request(col_3_query);

	// const footerBottomMenuQuery = `{
	// 	menu(id: "legal-links", idType: SLUG) {
	// 		databaseId
	// 		slug
	// 		menuItems {
	// 			nodes {
	// 				label
	// 				uri
	// 			}
	// 		}
	// 	}
	// }`;
	// const {menu: {databaseId: legalLinksMenuID, slug: fbMenuSlug, menuItems: {nodes: footerBottomMenuItems}}} = await client.request(footerBottomMenuQuery);
	// const copyrightTextQuery = `{
	// 	themeSettings {
	// 		frontEndSettings {
	// 			copyRightArea {
	// 				copyRightText
	// 			}
	// 		}
	// 	}
	// }`;
	// const {themeSettings: {frontEndSettings: {copyRightArea: {copyRightText}}}} = await client.request(copyrightTextQuery);
    return (
		<>
		{/* {console.log(fw1_first_elementObject)} */}
        <footer className="fl-page-footer-wrap" itemScope="itemscope" itemType="https://schema.org/WPFooter">
			<h1>Footer</h1>
			{/* Footer Bottom end */}
        </footer>
		</>
    );
}
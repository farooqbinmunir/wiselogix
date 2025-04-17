import Link from 'next/link';
import Image from 'next/image';
import Donate_Button from "./Donate_Button";
import GetInvolved from "./GetInvolved";
import client from '../../../config.js';

export default async function Footer() {


	  



	// /* Footer Social Links */
	const socialIconsQuery = `query socialIcons {
		themeSettings {
			frontEndSettings {
				socialMediaProfileUrls {
					facebookLink
					instagramLink
					linkdinLink
					tiktolkLink
					twitterLink
				}
			}
		}
	}`;
	const {themeSettings: {frontEndSettings: {socialMediaProfileUrls: socialLink}}} = await client.request(socialIconsQuery);
	/* end Footer Social Links */

	/* Footer Bottom Data Fetching */
	const contactDetailsQuery = `{
		themeSettings {
			frontEndSettings {
				contactInformation {
					contactAddress
					contactEMail
					contactPhone
				}
			}
		}
	}`;
	const {themeSettings: {frontEndSettings: {contactInformation}}} = await client.request(contactDetailsQuery);
	/* end Footer Contact Details */

	/* Footer Useful Links */
	const usefulLinksQuery = `{
		menu(id: "5", idType: DATABASE_ID) {
			menuItems {
				edges {
					node {
						uri
						label
					}
				}
			}
		}
	}`;
	const {menu: {menuItems: {edges: linkItems}}} = await client.request(usefulLinksQuery);

	const col_3_query = `{
		themeSettings {
			frontEndSettings {
				footerColumn3 {
					footerColumn3Desc
					footerLogo {
						node {
							sourceUrl
						}
					}
				}
			}
		}
	}`;
	const {themeSettings: {frontEndSettings: {footerColumn3}}} = await client.request(col_3_query);

	const footerBottomMenuQuery = `{
		menu(id: "legal-links", idType: SLUG) {
			databaseId
			slug
			menuItems {
				nodes {
					label
					uri
				}
			}
		}
	}`;
	const {menu: {databaseId: legalLinksMenuID, slug: fbMenuSlug, menuItems: {nodes: footerBottomMenuItems}}} = await client.request(footerBottomMenuQuery);
	const copyrightTextQuery = `{
		themeSettings {
			frontEndSettings {
				copyRightArea {
					copyRightText
				}
			}
		}
	}`;
	const {themeSettings: {frontEndSettings: {copyRightArea: {copyRightText}}}} = await client.request(copyrightTextQuery);
    return (
		<>
		{/* {console.log(fw1_first_elementObject)} */}
        <footer className="fl-page-footer-wrap" itemScope="itemscope" itemType="https://schema.org/WPFooter">

          	<h2 className="sr-only">Footer</h2>

			{/*<!-- Footer Get Involved Section -->*/}
			<GetInvolved />
			{/*<!-- Footer Get Involved Section -->*/}
          	<div className="footer_wrapper">
				{/*<!-- Footer Column 1 -->*/}
				<div className="footer_col column1">
					<div className="h5 white">Lorem ipsum dolor sit amet consectetur.</div>
					<ul aria-labelledby="footer-sn-title" className="footer_sn_icons">
						<li>
							<Link href={socialLink.instagramLink} target="_self" aria-label="Instagram"><i className="fab fa-instagram"></i></Link>
						</li>
						<li>
							<Link href={socialLink.twitterLink} target="_self" aria-label="Twitter"><i className="fab fa-twitter"></i></Link>
						</li>
						<li>
							<Link href={socialLink.facebookLink} target="_self" aria-label="Facebook"><i className="fab fa-facebook"></i></Link>
						</li>
						<li>
							<Link href={socialLink.linkdinLink} target="_self" aria-label="Linkedin"><i className="fab fa-linkedin"></i></Link>
						</li>
						<li>
							<Link href={socialLink.tiktolkLink} target="_self" aria-label="Tiktok"><i className="fab fa-tiktok"></i></Link>
						</li>
					</ul>

					<h3 id="footer-sn-contact" className="sr-only">Contact Us</h3>
					<div aria-labelledby="footer-sn-contact" className="footer_contact" role="region">
						<div className="contact_item">
							<i className="fas fa-envelope"></i>
							<Link href={`mailto:${contactInformation.contactEMail}`} className="mail-link">{contactInformation.contactEMail}</Link>
						</div>
						<div className="contact_item">
							<i className="fas fa-phone"></i>
							<Link href={`mailto:${contactInformation.contactPhone}`}>{contactInformation.contactPhone}</Link>
						</div>
						<div className="contact_item">
							<i className="fas fa-paper-plane"></i>
							<Link href={`#`}>{contactInformation.contactAddress}</Link>
						</div>
					</div>
				</div>
				{/* Footer Column 1 */}

				{/* Footer Column 2 */}
				<div className="footer_col column2 jjkjkjkjk">
					<h3 id="footer-useful-title" className="footer-nav-heading white">Useful Links</h3>
					<ul aria-labelledby="footer-useful-title" className="footer_useful_links linostyle nomargin nopadding footer-nav-links">
						{linkItems.map((link, index) => <li className="footer_useful_link_item" key={index}><Link href={link.node.uri} target="_self">{link.node.label}</Link></li>)}
					</ul>
				</div>
				{/* Footer Column 2 */}

				
				{/* Footer Column 3 */}
				<div className="footer_col column3">
				<Image  className="oxfam_logo" src={footerColumn3.footerLogo.node.sourceUrl} aria-hidden="true" alt="Image" height="144" width="362" />
					<div className="footer_member">{footerColumn3.footerColumn3Desc}</div>
					<Donate_Button cls={`footer_donate_button`} theme="oranage" />
				</div>
				{/* Footer Column 3 */}
          	</div>

			{/* Footer Bottom */}
			<div id="footer_bottom" className="postfooter" style={{"display": "block"}} data-menu-id={legalLinksMenuID} data-menu-slug={fbMenuSlug} >
				<div className="postfooter_inner">
					<div className="col2 footer_info">
						<h3 id="footer-legal-title" className="sr-only">Legal Links</h3>
						<ul aria-labelledby="footer-legal-title" className="nopadding nomargin">
							{footerBottomMenuItems.map((menuItem, index) => <li key={index} className="footer_info_item"><Link className="white" href={menuItem.uri}>{menuItem.label}</Link></li>)}
						</ul>
					</div>
					<div className="col3 footer_info">{copyRightText}</div>
				</div>
			</div>

			<div className="footer_bottomline"></div>
			{/* Footer Bottom end */}



        </footer>
		</>
    );
}
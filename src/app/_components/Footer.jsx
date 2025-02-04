import Donate_Button from "./Donate_Button";
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
						url
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
    return (
		<>
		{/* {console.log(fw1_first_elementObject)} */}
        <footer className="fl-page-footer-wrap" itemScope="itemscope" itemType="https://schema.org/WPFooter">

          	<h2 className="sr-only">Footer</h2>

          	<div className="footer_wrapper">
				{/*<!-- Footer Column 1 -->*/}
				<div className="footer_col column1">
					<div className="h5 white">Lorem ipsum dolor sit amet consectetur.</div>
					<ul aria-labelledby="footer-sn-title" className="footer_sn_icons">
						<li>
							<a href={socialLink.instagramLink} target="_self" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
						</li>
						<li>
							<a href={socialLink.twitterLink} target="_self" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
						</li>
						<li>
							<a href={socialLink.facebookLink} target="_self" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
						</li>
						<li>
							<a href={socialLink.linkdinLink} target="_self" aria-label="Linkedin"><i className="fab fa-linkedin"></i></a>
						</li>
						<li>
							<a href={socialLink.tiktolkLink} target="_self" aria-label="Tiktok"><i className="fab fa-tiktok"></i></a>
						</li>
					</ul>

					<h3 id="footer-sn-contact" className="sr-only">Contact Us</h3>
					<div aria-labelledby="footer-sn-contact" className="footer_contact" role="region">
						<div className="contact_item">
							<i className="fas fa-envelope"></i>
							<a href={`mailto:${contactInformation.contactEMail}`} className="mail-link">{contactInformation.contactEMail}</a>
						</div>
						<div className="contact_item">
							<i className="fas fa-phone"></i>
							<a href={`mailto:${contactInformation.contactPhone}`}><span className="sr-only">Phone:&nbsp;</span>{contactInformation.contactPhone}</a>
						</div>
						<div className="contact_item">
							<i className="fas fa-paper-plane"></i>
							<p>{contactInformation.contactAddress}</p>
						</div>
					</div>
				</div>
				{/* Footer Column 1 */}

				{/* Footer Column 2 */}
				<div className="footer_col column2">
					<h3 id="footer-useful-title" className="footer-nav-heading white">Useful Links</h3>
					<ul aria-labelledby="footer-useful-title" className="footer_useful_links linostyle nomargin nopadding footer-nav-links">
						{linkItems.map((link, index) => <li className="footer_useful_link_item" key={index}><a href={link.node.url} target="_self">{link.node.label}</a></li>)}
					</ul>
				</div>
				{/* Footer Column 2 */}

				
				{/* Footer Column 3 */}
				<div className="footer_col column3">
					<img className="oxfam_logo" src={footerColumn3.footerLogo.node.sourceUrl} aria-hidden="true" alt=""
						height="144" width="362" />
					<div className="footer_member">{footerColumn3.footerColumn3Desc}</div>
					<Donate_Button cls={`footer_donate_button`} theme="oranage" />
				</div>
				{/* Footer Column 3 */}
          	</div>

			{/* Footer Bottom */}
			{/* <div id="footer_bottom" dangerouslySetInnerHTML={{__html: footerBottomHtml}}></div> */}
			{/* Footer Bottom end */}



        </footer>
		</>
    );
}
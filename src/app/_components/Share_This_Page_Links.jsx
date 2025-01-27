import client from '../../../config.js';
export default async function Share_This_Page_Links({cls="", style={}}) {


    const shareThisPageLinksQuery = `query FooterBottomHTML {
		pages(where: {id: 42}) { # Page id for (Custom Data) page, all custom data we'll get from this page using ACF
			edges {
				node {
					customData {
						shareThisPageSection
					}
				}
			}
		}
	}`;
	const {pages: {edges} } = await client.request(shareThisPageLinksQuery);
	const shareThisPageHTML = edges[0]?.node?.customData?.shareThisPageSection;
    return (
        <>
            <div id="share_this_page_links" dangerouslySetInnerHTML={{__html: shareThisPageHTML}} className="oxfam_sharing_container"></div>
        </>
    );
}
import client from '../../../config.js';
export default async function Footer() {
	/* Footer Widgets Data Fetching */
	const footerWidgetsQuery = `query FooterWidgets {
      footerWidgets {
        footer_widget_1 {
          title
          content
        }
        footer_widget_2 {
          title
          content
        }
        footer_widget_3 {
          title
          content
        }
      }
    }`;
	const {footerWidgets} = await client.request(footerWidgetsQuery);
	const {footer_widget_1, footer_widget_2, footer_widget_3} = footerWidgets;
	const [fw1_first_elementObject] = footer_widget_1;
	const [fw2_first_elementObject] = footer_widget_2;
	const [fw3_first_elementObject] = footer_widget_3;
	/* Footer Widgets Data Fetching end */

	/* Footer Bottom Data Fetching */
	const footerBottomQuery = `query FooterBottomHTML {
		pages(where: {id: 42}) { # Page id for (Custom Data) page, all custom data we'll get from this page using ACF
			edges {
				node {
					customData {
						footerBottomHtml
					}
				}
			}
		}
	}`;
	const {pages: {edges} } = await client.request(footerBottomQuery);
	const footerBottomHtml = edges[0]?.node?.customData?.footerBottomHtml;
	/* Footer Bottom Data Fetching End */

    return (
		<>
		{/* {console.log(fw1_first_elementObject)} */}
        <footer className="fl-page-footer-wrap" itemScope="itemscope" itemType="https://schema.org/WPFooter">

          	<h2 className="sr-only">Footer</h2>

          	<div className="footer_wrapper">
				{/*<!-- Footer Column 1 -->*/}
				<div className="footer_col column1" dangerouslySetInnerHTML={{ __html: fw1_first_elementObject.content }}></div>
				{/* Footer Column 1 */}

				{/* Footer Column 2 */}
				<div className="footer_col column2" dangerouslySetInnerHTML={{ __html: fw2_first_elementObject.content }}></div>
				{/* Footer Column 2 */}

				{/* Footer Column 3 */}
				<div className="footer_col column3" dangerouslySetInnerHTML={{ __html: fw3_first_elementObject.content }}></div>
				{/* Footer Column 3 */}
          	</div>

			{/* Footer Bottom */}
			<div id="footer_bottom" dangerouslySetInnerHTML={{__html: footerBottomHtml}}></div>
			{/* Footer Bottom end */}



        </footer>
		</>
    );
}
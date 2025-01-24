export default function Share_This_Page_Links({cls="", style={}}) {
    return (
        <>
        <div id="share_this_page_links" className={`${cls} oxfam_sharing_container`} style={style}>
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
                    <a href="#" data-enc-email="" target="_blank" className="mail-link">
                        <span className="sr-only">Share via email (opens in new window)</span>
                        <i className="fas fa-envelope"></i>
                    </a>
                </li>
            </ul>
        </div>
        </>
    );
}
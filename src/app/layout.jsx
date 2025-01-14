import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';

// Importing CSS

// Thirdparty Libs CSS
import "../../public/assets/css/bootstrap-3.4.1.css";
import "../../public/assets/css/fontawesome.css";
import "../../public/assets/css/jquery.magnificpopup.css";

// import "../../public/assets/css/block-liberary.css";
// import "../../public/assets/css/complianz-gdpr.css";
// import "../../public/assets/css/wp-blocks.css";
// import "../../public/assets/css/dashicons.min.css";
// import "../../public/assets/css/ultimate-icons.css";

// Merged Custom CSS
import "../../public/assets/css/merged.css";
import "../../public/assets/css/merged-responsive.css";

import "../../public/assets/css/custom.css";
import "../../public/assets/css/responsive.css";

// Custom CSS
// import "../../public/assets/css/homepage.css";
// import "../../public/assets/css/layout.css";
// import "../../public/assets/css/main.css";
// import "../../public/assets/css/skin.css";
// import "../../public/assets/css/bb-loop.css";
// import "../../public/assets/css/bb-theme-accessible.css";
// import "../../public/assets/css/focus.css";
// import "../../public/assets/css/style.css";


// Responsive CSS
// import "../../public/assets/css/bb-loop-responsive.css";
// import "../../public/assets/css/bb-theme-responsive.css";
// import "../../public/assets/css/focus_responsive.css";
// import "../../public/assets/css/homepage_responsive.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wiselogix Nextjs Application",
  description: "Generated by Farooq Bin Munir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>Wiselogix Technologies</title>

        <meta name="description" content="Wiselogix Technologies offers Web Development, App Development, Software Development and much more..." />

        <link href="/assets/images/favicon.ico" rel="favicon" type="image/x-icon" />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />

        {/*<!-- JS Files -->*/}
        {/* Load jQuery first */}
        <Script
          src="/assets/js/jquery.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/js/jquery-migrate.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/js/slick.js"
          strategy="afterInteractive"
        />
        

        
        {/* Other JS files */}
        <Script src="/assets/js/bb-loop.js" strategy="afterInteractive" />
        <Script src="/assets/js/isotope.js" strategy="afterInteractive" />
        <Script src="/assets/js/imagesLoaded.js" strategy="afterInteractive" />
        <Script src="/assets/js/filter.js" strategy="afterInteractive" />
        {/* <Script src="/assets/js/focus.js" strategy="afterInteractive" /> */}
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
        <Script src="/assets/js/custom.js" strategy="afterInteractive" />

        {/*<!-- Custon JS Files -->*/}
        {/* <Script src="assets/js/custom.js" /> */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} home page-template page-template-single-menuoverlap page-template-single-menuoverlap-php page page-id-43648 fl-builder fl-builder-2-8-3-7 fl-themer-1-4-11 fl-theme-1-7-14 fl-framework-bootstrap fl-preset-default fl-full-width os_Windows`}>
        {/*<!--HEADER -->*/}
        <header
          className="fl-page-header fl-page-header-primary fl-page-nav-centered-inline-logo fl-page-nav-toggle-button fl-page-nav-toggle-visible-mobile header_height_fix"
          itemScope="itemscope" itemType="https://schema.org/WPHeader">
          {/*<!-- .fl-page-bar2 -->*/}
          <div className="fl-page-bar">
            <div className="fl-page-bar-container">
              <div className="top_bar_title">Ending global poverty begins with women’s rights</div>
              <nav className="top-bar-nav" aria-labelledby="quick-access" itemScope="itemscope"
                itemType="https://schema.org/SiteNavigationElement">
                <h2 id="quick-access" className="sr-only">Quick Access</h2>
                <ul id="menu-top-menu" className="fl-page-bar-nav nav navbar-nav menu" aria-labelledby="quick-access">
                  <li id="menu-item-35"
                    className="topbar_join menu-item menu-item-type-custom menu-item-object-custom menu-item-35 nav-item">
                    <button className="nav-link">Sign Up</button>
                  </li>
                  {/*<!--get rid of white space display in browsers -->*/}
                  <li id="menu-item-36"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-36 nav-item"><a
                      href="#" className="nav-link" target="_self">Shop Unwrapped</a>
                  </li>
                  <li id="menu-item-29966"
                    className="topbar_search menu-item menu-item-type-custom menu-item-object-custom menu-item-29966 nav-item">
                    <button className="nav-link">Search</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/*<!-- .fl-page-bar -->*/}

          {/*<!-- SEARCH BOX SLIDE DOWN -->*/}
          {/* <div className="searchbox" id="searchbox">
            <div className="search_wrap" role="dialog" aria-modal="true" aria-labelledby="search-modal-title">
              <div className="search_inner">
                <span className="modal-focus-trap" aria-hidden="true" id="search-top" tabIndex="0"
                  data-target="search-close"></span>
                <h3 id="search-modal-title" className="sr-only">Search</h3>

                <form method="get" id="searchform" action="#">
                  <label htmlFor="search_input">What can we help you find?</label>
                  <input id="search_input" type="text" name="s" className="search_input" />
                </form>
                <button className="search_button" form="searchform">Search</button>
                <button id="search-close" className="search_close" aria-label="Close"><i className="fas fa-times"
                    aria-hidden="true"></i></button>
                <span className="modal-focus-trap" aria-hidden="true" id="search-bottom" tabIndex="0"
                  data-target="search"></span>
              </div>
            </div>
          </div> */}
          {/*<!-- SEARCH BOX SLIDE DOWN -->*/}

          {/*<!-- SIGN UP FORM HEADER -->*/}
          <div id="joinusbox" className="joinusbox header">
            <div className="joinus_wrap" role="dialog" aria-modal="true" aria-labelledby="joinusform-header-title">
              <div className="search_inner">

                <span className="modal-focus-trap" aria-hidden="true" id="joinus-top" tabIndex="0"
                  data-target="joinus-close"></span>
                <h3 id="joinusform-header-title" className="sr-only">Sign up</h3>

                <form id="joinusform_header" method="get"
                  action="#"
                  className="en__component en__component--page joinus-form" target="_self">


                  {/*<!-- first name -->*/}
                  <div className="en__field en__field--text en__field--306158 en__field--firstName en__mandatory">
                    <div className="en__field__element en__field__element--text ">
                      <label htmlFor="en__field_supporter_firstName_inheader">First Name (required)</label>
                      <input autoComplete="given-name" id="en__field_supporter_firstName_inheader" required
                        aria-required="true" type="text"
                        className="join_input en__field__input en__field__input--text"
                        name="supporter.firstName" defaultValue="" />
                    </div>
                  </div>

                  {/*<!-- last name -->*/}
                  <div className="en__field en__field--text en__field--306160 en__field--lastName en__mandatory">
                    <div className="en__field__element en__field__element--text">
                      <label htmlFor="en__field_supporter_lastName_inheader">Last Name (required)</label>
                      <input autoComplete="family-name" id="en__field_supporter_lastName_inheader" required
                        aria-required="true" type="text"
                        className="join_input en__field__input en__field__input--text" name="supporter.lastName"
                        defaultValue="" />
                    </div>
                  </div>

                  {/*<!-- email -->*/}
                  <div className="en__field en__field--text en__field--306159 en__field--emailAddress en__mandatory">
                    <div className="join_inputen__field__element en__field__element--text">
                      <label htmlFor="en__field_supporter_emailAddress_inheader">E-mail Address (required)</label>
                      <input autoComplete="email" id="en__field_supporter_emailAddress_inheader" required
                        aria-required="true" type="text"
                        className="join_input en__field__input en__field__input--text"
                        name="supporter.emailAddress" defaultValue="" />
                    </div>
                  </div>


                  {/*<!-- opt in -->*/}
                  <div
                    className="en__field en__field--checkbox en__field--question en__field--147505 en__field--opt-in">
                    <div className="en__field__element en__field__element--checkbox">
                      <div className="en__field__item">
                        <label htmlFor="en__field_supporter_questions_147505_inheader"
                          className="en__field__label en__field__label--item joinus-form--desc">
                          <input type="hidden" name="supporter.questions.147505"
                            className="en__field_supporter_questions_147505_control" defaultValue="N" />
                          <input id="en__field_supporter_questions_147505_inheader" type="checkbox"
                            className="en__field__input en__field__input--checkbox" />
                          I would like to receive email updates from Oxfam Canada. I understand I can
                          unsubscribe at any time.
                        </label>
                        <script>
                          document.getElementById('en__field_supporter_questions_147505_inheader')
                        </script>
                      </div>
                    </div>
                  </div>


                  <div className="en__submit">
                    <button id="joinus_form_submit_header"
                      className="joinus_form_submit header oxfam_button oxfam_orange_button">Sign Up</button>
                  </div>



                </form>
                <button id="joinus-close" className="joinus_close" aria-label="Close"><i className="fas fa-times"
                    aria-hidden="true"></i></button>

                <span className="modal-focus-trap" aria-hidden="true" id="joinus-bottom" tabIndex="0"
                  data-target="search"></span>

              </div>
            </div>
          </div>
          {/*<!-- SIGN UP FORM HEADER -->*/}

          {/*<!-- MAIN MENU -->*/}
          <nav id="main-menu" aria-label="Site">
            <h2 id="nav-title" className="sr-only">Site Navigation</h2>
            <div className="menu-mobile-header">
              <a id="menu-40120-title-mobile" href="/"
                className="menu_main_logo menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-30765 current_page_item"
                title="">Oxfam Canada Home Page</a>
              <a className="menu_mobile_donate"
                href="#">Donate</a>
              <button className="mobile_menu_toggle" aria-expanded="false" aria-label="Navigation menu"><img
                  src="assets/images/menu-mobile-hamb.svg" alt="" aria-hidden="true" /></button>
            </div>
            <h3 className="sr-only">Menu</h3>
			<ul className="menu-desktop" aria-labelledby="nav-title">
              	<li>
                	<a id="menu-41417-title" href="/" className="menu_main_logo menu-item menu-item-type-post_type menu-item-object-page" title="">
                  		<span className="sr-only">Home Page</span>
                	</a>
              	</li>
				<li>
					<a href="/" className="menu_main_mobile_shop menu-item">
						<button id="" aria-expanded="false" className="mainmenu_main menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">Home</button>
					</a>
				</li>
				<li data-id="menu-31-title" className="">
					<button id="menu-31-title" aria-expanded="false" className="mainmenu_main menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">About Us</button>
					<ul data-depth="0" className="sub-menu " aria-labelledby="menu-31-title">
						<li data-id="menu-29971-title"><a id="menu-29971-title" href="#" className=" menu-item menu-item-type-post_type menu-item-object-page" title="">Our Story</a></li>
						<li data-id="menu-30184-title"><a id="menu-30184-title" href="#" className=" menu-item menu-item-type-post_type menu-item-object-page" title="">Our History</a></li>
						<li data-id="menu-30218-title"><a id="menu-30218-title" href="#" className=" menu-item menu-item-type-post_type menu-item-object-page" title="">Our Mission, Vision and Values</a></li>
						<li data-id="menu-30220-title"><a id="menu-30220-title" href="#" className=" menu-item menu-item-type-post_type menu-item-object-page" title="">Our Team</a></li>
					</ul>
              	</li>
              	<li data-id="menu-32-title" className="">
					<button id="menu-32-title" aria-expanded="false" className="mainmenu_main menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">What We Do</button>
					<ul data-depth="0" className="sub-menu " aria-labelledby="menu-32-title">
						<li data-id="menu-30368-title"><a id="menu-30368-title" href="#" className=" menu-item menu-item-type-post_type menu-item-object-page" title="">Our work with women and children</a></li>
						<li data-id="menu-30367-title"><a id="menu-30367-title" href="#" className=" menu-item menu-item-type-post_type menu-item-object-page" title="">Assisting widows and the marginalized</a></li>
						<li data-id="menu-30227-title"><a id="menu-30227-title" href="#" className=" menu-item menu-item-type-post_type menu-item-object-page" title="">Championing Education for the Girl Child</a></li>
						<li data-id="menu-30365-title"><a id="menu-30365-title" href="#" className=" menu-item menu-item-type-post_type menu-item-object-page" title="">Health</a></li>
						<li data-id="menu-30271-title"><a id="menu-30271-title" href="#" className=" menu-item menu-item-type-post_type menu-item-object-page" title="">Our Projects</a></li>
					</ul>
              	</li>
				<li data-id="menu-29941-title" className="">
					<button id="menu-29941-title" aria-expanded="false" className="mainmenu_main menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">Get Involved</button>
					<ul data-depth="0" className="sub-menu " aria-labelledby="menu-29941-title">
						<li data-id="menu-30233-title"><a id="menu-30233-title" href="#" className=" menu-item menu-item-type-post_type menu-item-object-page" title="">Volunteer Opportunities</a></li>
						<li data-id="menu-30480-title"><a id="menu-30480-title" href="#" className=" menu-item menu-item-type-post_type menu-item-object-page" title="">Become an Advocate</a></li>
						<li data-id="menu-32365-title"><a id="menu-32365-title" href="#" className=" menu-item menu-item-type-custom menu-item-object-custom" title="">Fundraising Event</a></li>
					</ul>
				</li>
				<li data-id="menu-29939-title" className="">
					<button id="menu-29939-title" aria-expanded="false" className="mainmenu_main menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">News &amp; Stories</button>
					<ul data-depth="0" className="sub-menu " aria-labelledby="menu-29939-title">
						<li data-id="menu-30024-title"><a id="menu-30024-title" href="#" className=" menu-item menu-item-type-post_type menu-item-object-page" title="">News/Articles</a></li>
						<li data-id="menu-32594-title"><a id="menu-32594-title" href="#" className=" menu-item menu-item-type-post_type menu-item-object-page" title="">Reports</a></li>
					</ul>
				</li>
				<li data-id="menu-30191-title" className="">
					<button id="menu-30191-title" aria-expanded="false" className="mainmenu_main menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">Resources & Reports</button>
					<ul data-depth="0" className="sub-menu " aria-labelledby="menu-30191-title">
						<li data-id="menu-37849-title"><a id="menu-37849-title" href="#" className=" menu-item menu-item-type-post_type menu-item-object-page" title="">Host Downloadable Reports</a></li>
						<li data-id="menu-37848-title"><a id="menu-37848-title" href="#" className=" menu-item menu-item-type-post_type menu-item-object-page" title="">Press Releases</a></li>
						<li data-id="menu-37996-title"><a id="menu-37996-title" href="#" className=" menu-item menu-item-type-post_type menu-item-object-page" title="">Organization’s Work</a></li>
					</ul>
				</li>
				<li data-id="menu-40171-title"><a id="menu-40171-title" href="#" className="menu_main_mobile_shop menu-item menu-item-type-custom menu-item-object-custom" title="">Contact Us</a></li>
				<li data-id="menu-29960-title"><a id="menu-29960-title" href="#" className="menu_main_donate menu-itemoxfam_button oxfam_orange_button header-nav-donate" title="">Donate</a></li>
            </ul>
          </nav>
          {/*<!-- MAIN MENU -->*/}


        </header>
        {/*<!--HEADER -->*/}
        
        {children}

        <footer className="fl-page-footer-wrap" itemScope="itemscope" itemType="https://schema.org/WPFooter">

          <h2 className="sr-only">Footer</h2>

          <div className="footer_wrapper">

            {/*<!-- Footer Column 1 -->*/}
            <div className="footer_col column1">

              <div className="h5 white">Lorem ipsum dolor sit amet consectetur.</div>

              <h3 id="footer-sn-title" className="sr-only">Connect with us</h3>
              <ul aria-labelledby="footer-sn-title" className="footer_sn_icons">
                <li>
                  <a href="#" target="_self" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_self" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_self" aria-label="Facebook">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_self" aria-label="Linkedin">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
				<li>
                  <a href="#" target="_self" aria-label="Tiktok">
                    <i className="fab fa-tiktok"></i>
                  </a>
                </li>
              </ul>

              <h3 id="footer-sn-contact" className="sr-only">Contact Us</h3>
              <div aria-labelledby="footer-sn-contact" className="footer_contact" role="region">
                {/*<div><i className="ua-icon ua-icon-location-pin" aria-hidden="true"></i>39 McArthur Ave. Ottawa, Ontario, K1L 8L7</div>*/}
                <div className="contact_item">
					<i className="fas fa-envelope"></i>
                  <a href="mailto:info@gmail.com" className="mail-link">info@gmail.com</a></div>
                <div className="contact_item">
					<i className="fas fa-phone"></i>
                  	<a href="tel:"><span className="sr-only">Phone:&nbsp;</span>+123456789</a>
                </div>
                <div className="contact_item">
					<i className="fas fa-paper-plane"></i>
                  	<a href="#">Lorem Acknowledgement</a>
                </div>
              </div>

            </div>
            {/* Footer Column 1 */}
            {/* Footer Column 2 */}
            <div className="footer_col column2">
              <h3 id="footer-useful-title" className="footer-nav-heading white">Useful links</h3>
              <ul aria-labelledby="footer-useful-title" className="footer_useful_links linostyle nomargin nopadding footer-nav-links">
                <li><a href="#" target="_self">Home</a></li>
                <li><a href="#" target="_self">About</a></li>
                <li><a href="#" target="_self">Campaigns</a></li>
                <li><a href="#" target="_self">Get Involved</a></li>
                <li><a href="#" target="_self">Blog</a></li>
                <li><a href="#" target="_self">Resources</a></li>
				<li><a href="#" target="_self">Our Gallery</a></li>
                <li><a href="#" target="_self">Contact</a></li>
              </ul>
            </div>
            {/* Footer Column 2 */}
            {/* Footer Column 3 */}
            <div className="footer_col column3">
              <img className="oxfam_logo" src="assets/images/white-logo.png" aria-hidden="true" alt=""
                height="144" width="362" />
              <div className="footer_member">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, incidunt!</div>
              <div className="logos_2col">
			  	<a href="#" target="_self" className="oxfam_orange_button oxfam_button footer_donate_button">Donate</a>
              </div>
            </div>
            {/* Footer Column 3 */}

          </div>

          {/* Post footer */}
          <div className="postfooter" style={{
					display: "block",
				}}>
            <div className="postfooter_inner">
              <div className="col2 footer_info">
                <h3 id="footer-legal-title" className="sr-only">Legal Links</h3>
                <ul aria-labelledby="footer-legal-title" className="nopadding nomargin">
                  <li className="footer_info_item"><a className="white" href="#">Privacy
                      Policy</a></li>
                  <li className="footer_info_item"><a className="white" href="#">Accessibility</a>
                  </li>
                  <li className="footer_info_item"><a className="white"
                      href="#">Careers</a></li>
                  <li className="footer_info_item"><a className="white"
                      href="#">About Us</a></li>
                </ul>
              </div>
              <div className="col3 footer_info">&copy; 2025 Wiselogix Technologies</div>
            </div>
          </div>

          <div className="footer_bottomline"></div>
          {/* Post footer */}



        </footer>
        <div role="status" id="site-wide-aria-status" className="sr-only"></div>

        {/* Scripts */}

        <Script src="assets/js/dompurify.js" />
        <Script src="assets/js/waypoints.js" />
        <Script src="assets/js/fitvids.js" />
        <Script src="assets/js/cookie-popup.js" />
        <Script src="assets/js/iframe-master.js" />
        <Script src="assets/js/thorttle-debounce.js" />
        <Script src="assets/js/imagesLoaded.js" />
        <Script src="assets/js/jquery-magnificpopup.js" />
        <Script src="assets/js/bootstrap.js" />
      </body>
    </html>
  );
}

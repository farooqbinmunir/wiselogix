'use client';
import {Menu, Logo, Container} from '../exports';
export default function Header(){
    return (
        <header
        className="fl-page-header fl-page-header-primary fl-page-nav-centered-inline-logo fl-page-nav-toggle-button fl-page-nav-toggle-visible-mobile header_height_fix"
        itemScope="itemscope" itemType="https://schema.org/WPHeader">
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
    );
}
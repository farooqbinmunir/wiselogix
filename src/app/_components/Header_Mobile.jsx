export default function Header_Mobile() {
    return (
        <>
        <div className="menu-mobile-header">
            <a
                id="menu-40120-title-mobile"
                href="/"
                className="menu_main_logo menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-30765 current_page_item"
                title=""
            >
                Oxfam Canada Home Page
            </a>
            <a className="menu_mobile_donate" href="#">
                Donate
            </a>
            <button
                className="mobile_menu_toggle"
                aria-expanded="false"
                aria-label="Navigation menu"
            >
                <img
                src="assets/images/menu-mobile-hamb.svg"
                alt=""
                aria-hidden="true"
                />
            </button>
            </div>
        </>
    );
}
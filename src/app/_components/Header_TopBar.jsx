import Link from 'next/link';
export default function Header_TopBar() {
    return (
        <div className="header_top_bar fl-page-bar">
            <div className="fl-page-bar-container">
            <div className="top_bar_title">
                Ending global poverty begins with women’s rights
            </div>
            <nav
                className="top-bar-nav"
                aria-labelledby="quick-access"
                itemScope="itemscope"
                itemType="https://schema.org/SiteNavigationElement"
            >
                <h2 id="quick-access" className="sr-only">
                Quick Access
                </h2>
                <ul
                id="menu-top-menu"
                className="fl-page-bar-nav nav navbar-nav menu"
                aria-labelledby="quick-access"
                >
                <li
                    id="menu-item-35"
                    className="topbar_join menu-item menu-item-type-custom menu-item-object-custom menu-item-35 nav-item"
                >
                    <button className="nav-link">Sign Up</button>
                </li>
                <li
                    id="menu-item-36"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-36 nav-item"
                >
                    <Link href="#" className="nav-link" target="_self">Shop Unwrapped</Link>
                </li>
                <li
                    id="menu-item-29966"
                    className="topbar_search menu-item menu-item-type-custom menu-item-object-custom menu-item-29966 nav-item"
                >
                    <button className="nav-link">Search</button>
                </li>
                </ul>
            </nav>
            </div>
        </div>
    );
}
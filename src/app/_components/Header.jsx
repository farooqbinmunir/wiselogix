import Header_TopBar from "./Header_TopBar";
import Header_MainRow from "./Header_MainRow";
export default function Header() {
  return (
    <header
      className="fl-page-header fl-page-header-primary fl-page-nav-centered-inline-logo fl-page-nav-toggle-button fl-page-nav-toggle-visible-mobile header_height_fix"
      itemScope="itemscope"
      itemType="https://schema.org/WPHeader">
        
        {/*<!-- TOP BAR -->*/}
        <Header_TopBar />
        {/*<!-- TOP BAR -->*/}

        {/*<!-- MAIN Header -->*/}
        <Header_MainRow />
        {/*<!-- MAIN Header -->*/}
    </header>
  );
}

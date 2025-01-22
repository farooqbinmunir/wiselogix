import Logo from "./Logo";
import Donate_Button from "./Donate_Button";
export default function Header_Mobile() {
    return (
        <>
            <div className="menu-mobile-header">
                <Logo />
                {/* <a href="/" className="menu_main_logo">Oxfam Canada Home Page</a> */}
                <Donate_Button screen="mobile" theme="orange" />
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
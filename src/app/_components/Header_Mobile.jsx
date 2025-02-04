import Image from 'next/image';
import ToggleIcon from '../../../public/assets/images/menu-mobile-hamb.svg';
import Logo from "./Logo";
import Donate_Button from "./Donate_Button";
export default function Header_Mobile() {
    return (
        <>
            <div className="menu-mobile-header">
                <Logo />
                <Donate_Button cls="menu_mobile_donate" theme="orange" />
                <button
                    className="mobile_menu_toggle"
                    aria-expanded="false"
                    aria-label="Navigation menu"
                >
                    <Image src={ToggleIcon} alt="Toggle Icon" aria-hidden={true} />
                </button>
            </div>
        </>
    );
}
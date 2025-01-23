import Logo from "./Logo";
import Menu from "./Menu";
import Donate_Button from "./Donate_Button";
export default function Header_Desktop() {
	return (
		<>
			<ul className="menu-desktop" aria-labelledby="nav-title">
				<li className="menu-desktop-logo">
					<Logo />
				</li>
				<li className="menu-desktop-nav">
					<Menu />
				</li>
				<li className="menu-desktop-donate">
					<Donate_Button cls="menu_main_donate header-nav-donate" theme="green" />
				</li>
			</ul>
		</>
	);
}

import Logo from "./Logo";
import Menu from "./Menu";
import Donate_Button from "./Donate_Button";
export default function Header_Desktop() {
	return (
		<>
			<ul
				className="menu-desktop"
				aria-labelledby="nav-title">
				<li>
					<Logo />
				</li>
				<li>
					<Menu />
				</li>
				<li>
					<Donate_Button />
				</li>
			</ul>
		</>
	);
}

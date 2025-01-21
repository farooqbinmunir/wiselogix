import Link from "next/link";
export default function Donate_Button({desktop = true}) {
    return <Link href="#" className={ desktop === true ? "menu_main_donate oxfam_orange_button header-nav-donate" : "menu_mobile_donate oxfam_orange_button"} title="Donate Now">Donate</Link>;
}
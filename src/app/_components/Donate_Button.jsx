import Link from "next/link";
export default function Donate_Button({screen = "all", theme = "green"}) {
    let buttonClass = 
        screen === "mobile" ? "menu_mobile_donate" :
        screen === "desktop" ? "menu_main_donate header-nav-donate" :
        "donate_button";
    buttonClass += theme === "green" ? " donate_button_green" : " donate_button_orange";
    return <Link href="#" className={buttonClass} title="Donate Now">Donate</Link>;
}
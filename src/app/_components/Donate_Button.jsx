import Link from "next/link";
export default function Donate_Button({cls = "", theme = "green"}) {
    let buttonClass = "donate_button";
    buttonClass += theme === "green" ? " donate_button_green" : " donate_button_orange";
    buttonClass += ` ${cls}`;
    return <Link href="#" className={buttonClass} title="Donate Now">Donate</Link>;
}
import Link from "next/link";
import client from '../../../config.js';
export default async function Donate_Button({cls = "", theme = "green"}) {
    let buttonClass = "donate_button"; 
    buttonClass += theme === "green" ? " donate_button_green" : " donate_button_orange";
    buttonClass += ` ${cls}`; 

    const themeSettingsQuery = `query donateButton {
        themeSettings {
            frontEndSettings {
                donateButton {
                    donateButtonText
                    donateButtonUrl
                }
            }
        }
    }`;
    const {themeSettings: {frontEndSettings: {donateButton}}} = await client.request(themeSettingsQuery);
    return <Link href={donateButton.donateButtonUrl} className={buttonClass} title={donateButton.donateButtonText}>{donateButton.donateButtonText}</Link>;
}
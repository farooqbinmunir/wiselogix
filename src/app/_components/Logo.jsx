import Image from "next/image";
import Link from "next/link";
import client from '../../../config.js';

export default async function Logo(){
    let logoQuery = `{
		siteLogo
	}`;
	let {siteLogo} = await client.request(logoQuery);
    return (
        <>
            <div id="logo" className="logo">
                <div className="logo_wrapper">
                    <Link href='/' className="logo_link logo_img_link menu_main_logo menu-item">
                        <Image src={siteLogo} width={100} height={60} alt="Ognwuche Foundation Official Logo" />
                    </Link>
                </div>
            </div>
        </>
    );
}
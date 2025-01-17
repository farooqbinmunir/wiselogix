import Image from "next/image";
import Link from "next/link";
import {useQuery} from '@tanstack/react-query';
import {getSettings, getLogo} from "../exports";
export default function Logo(){
    let logoUrl;
    let slug = `settings`;
    const {data: settings} = useQuery({
        queryKey: ['getSettings', slug],
        queryFn: getSettings,
    });
    let logoId = settings?.site_logo;
    const {data, status} = useQuery({
        queryKey: ['getLogoUrl', logoId],
        queryFn: getLogo,
        enabled: !!logoId,
    });
    if(status == 'pending') return <h3>&#127744; Loading...</h3>;
    if(status == 'success'){
        logoUrl = data?.source_url;
    }
    return (
        <>
            <div className="logo">
                <Link href='/'><Image src={logoUrl} width="165" height="70" alt='Logo' className='logo-image' priority={true} /></Link>
            </div>
        </>
    );
}
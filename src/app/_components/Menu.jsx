'use client';
import Link from "next/link";
import { getMenus, getMenusItems} from "../exports";
import {useQuery, useSuspenseQuery} from '@tanstack/react-query';
export default function Menu(){

    let menuItems;
    const menuSlug = `primary`;
    const {data: menus} = useQuery({
        queryKey: ['getMenu', menuSlug],
        queryFn: getMenus,
    });
    const menuId = menus?.[0].id;
    const {status, data} = useQuery({
        queryKey: ['getMenuItems', menuId],
        queryFn: getMenusItems,
        enabled: !!menuId,
    });
    if(status == 'pending') return <h3>&#127744; Loading...</h3>;
    if(status == 'success'){
        menuItems = data;
    }
	
    return(
        <>
            {/* <h1>Menu here...</h1> */}
            <ul className='nav-items'>
                {menuItems.map(m => <li key={m.id} id={`nav-item-${m.id}`} data-id={`${m.id}`} className={(m.url).slice(1) + ' nav-item'}><Link className='nav-item-link' href={m.url.split('wp').length > 1 ? m.url.split('wp')[1] : m.url.split('wp')[0]}>{m.title.rendered}</Link></li>)}
            </ul>
        </>
    );
}
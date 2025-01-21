'use client';
import Link from "next/link";
import { getMenus, getMenusItems} from "../exports";
import {useQuery, useSuspenseQuery} from '@tanstack/react-query';
export default function Menu(){

    // let menuItems;
    // const menuSlug = `primary`;
    // const {data: menus} = useQuery({
    //     queryKey: ['getMenu', menuSlug],
    //     queryFn: getMenus,
    // });
    // const menuId = menus?.[0].id;
    // const {status, data} = useQuery({
    //     queryKey: ['getMenuItems', menuId],
    //     queryFn: getMenusItems,
    //     enabled: !!menuId,
    // });
    // if(status == 'pending') return <h3>&#127744; Loading...</h3>;
    // if(status == 'success'){
    //     menuItems = data;
    // }
	
    return(
        <>
            <ul className='nav-items'>
                <li>
					<a
						href="/"
						className="menu_main_mobile_shop menu-item">
						<button
							id=""
							aria-expanded="false"
							className="mainmenu_main menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
							Home
						</button>
					</a>
				</li>
				<li
					data-id="menu-31-title"
					className="menu-item-has-children">
					<button
						id="menu-31-title"
						aria-expanded="false"
						className="mainmenu_main menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
						About
						Us
					</button>
					<ul
						data-depth="0"
						className="sub-menu "
						aria-labelledby="menu-31-title">
						<li data-id="menu-29971-title">
							<a
								id="menu-29971-title"
								href="#"
								className=" menu-item menu-item-type-post_type menu-item-object-page"
								title="">
								Our
								Story
							</a>
						</li>
						<li data-id="menu-30184-title">
							<a
								id="menu-30184-title"
								href="#"
								className=" menu-item menu-item-type-post_type menu-item-object-page"
								title="">
								Our
								History
							</a>
						</li>
						<li data-id="menu-30218-title">
							<a
								id="menu-30218-title"
								href="#"
								className=" menu-item menu-item-type-post_type menu-item-object-page"
								title="">
								Our
								Mission,
								Vision
								and
								Values
							</a>
						</li>
						<li data-id="menu-30220-title">
							<a
								id="menu-30220-title"
								href="#"
								className=" menu-item menu-item-type-post_type menu-item-object-page"
								title="">
								Our
								Team
							</a>
						</li>
					</ul>
				</li>
				<li
					data-id="menu-32-title"
					className="menu-item-has-children">
					<button
						id="menu-32-title"
						aria-expanded="false"
						className="mainmenu_main menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
						What
						We
						Do
					</button>
					<ul
						data-depth="0"
						className="sub-menu "
						aria-labelledby="menu-32-title">
						<li data-id="menu-30368-title">
							<a
								id="menu-30368-title"
								href="#"
								className=" menu-item menu-item-type-post_type menu-item-object-page"
								title="">
								Our
								work
								with
								women
								and
								children
							</a>
						</li>
						<li data-id="menu-30367-title">
							<a
								id="menu-30367-title"
								href="#"
								className=" menu-item menu-item-type-post_type menu-item-object-page"
								title="">
								Assisting
								widows
								and
								the
								marginalized
							</a>
						</li>
						<li data-id="menu-30227-title">
							<a
								id="menu-30227-title"
								href="#"
								className=" menu-item menu-item-type-post_type menu-item-object-page"
								title="">
								Championing
								Education
								for
								the
								Girl
								Child
							</a>
						</li>
						<li data-id="menu-30365-title">
							<a
								id="menu-30365-title"
								href="#"
								className=" menu-item menu-item-type-post_type menu-item-object-page"
								title="">
								Health
							</a>
						</li>
						<li data-id="menu-30271-title">
							<a
								id="menu-30271-title"
								href="#"
								className=" menu-item menu-item-type-post_type menu-item-object-page"
								title="">
								Our
								Projects
							</a>
						</li>
					</ul>
				</li>
				<li
					data-id="menu-29941-title"
					className="menu-item-has-children">
					<button
						id="menu-29941-title"
						aria-expanded="false"
						className="mainmenu_main menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
						Get
						Involved
					</button>
					<ul
						data-depth="0"
						className="sub-menu "
						aria-labelledby="menu-29941-title">
						<li data-id="menu-30233-title">
							<a
								id="menu-30233-title"
								href="#"
								className=" menu-item menu-item-type-post_type menu-item-object-page"
								title="">
								Volunteer
								Opportunities
							</a>
						</li>
						<li data-id="menu-30480-title">
							<a
								id="menu-30480-title"
								href="#"
								className=" menu-item menu-item-type-post_type menu-item-object-page"
								title="">
								Become
								an
								Advocate
							</a>
						</li>
						<li data-id="menu-32365-title">
							<a
								id="menu-32365-title"
								href="#"
								className=" menu-item menu-item-type-custom menu-item-object-custom"
								title="">
								Fundraising
								Event
							</a>
						</li>
					</ul>
				</li>
				<li
					data-id="menu-29939-title"
					className="menu-item-has-children">
					<button
						id="menu-29939-title"
						aria-expanded="false"
						className="mainmenu_main menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
						News
						&amp;
						Stories
					</button>
					<ul
						data-depth="0"
						className="sub-menu "
						aria-labelledby="menu-29939-title">
						<li data-id="menu-30024-title">
							<a
								id="menu-30024-title"
								href="#"
								className=" menu-item menu-item-type-post_type menu-item-object-page"
								title="">
								News/Articles
							</a>
						</li>
						<li data-id="menu-32594-title">
							<a
								id="menu-32594-title"
								href="#"
								className=" menu-item menu-item-type-post_type menu-item-object-page"
								title="">
								Reports
							</a>
						</li>
					</ul>
				</li>
				<li
					data-id="menu-30191-title"
					className="menu-item-has-children">
					<button
						id="menu-30191-title"
						aria-expanded="false"
						className="mainmenu_main menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
						Resources & Reports
					</button>
					<ul
						data-depth="0"
						className="sub-menu "
						aria-labelledby="menu-30191-title">
						<li data-id="menu-37849-title">
							<a
								id="menu-37849-title"
								href="#"
								className=" menu-item menu-item-type-post_type menu-item-object-page"
								title="">
								Host
								Downloadable
								Reports
							</a>
						</li>
						<li data-id="menu-37848-title">
							<a
								id="menu-37848-title"
								href="#"
								className=" menu-item menu-item-type-post_type menu-item-object-page"
								title="">
								Press
								Releases
							</a>
						</li>
						<li data-id="menu-37996-title">
							<a
								id="menu-37996-title"
								href="#"
								className=" menu-item menu-item-type-post_type menu-item-object-page"
								title="">
								Organization’s
								Work
							</a>
						</li>
					</ul>
				</li>
                <li>
                    <a href="#" className="menu_main_mobile_shop menu-item menu-item-type-custom menu-item-object-custom">Contact Us</a>
                </li>
            </ul>
            {/* <ul className='nav-items'>
                {menuItems.map(m => <li key={m.id} id={`nav-item-${m.id}`} data-id={`${m.id}`} className={(m.url).slice(1) + ' nav-item'}><Link className='nav-item-link' href={m.url.split('wp').length > 1 ? m.url.split('wp')[1] : m.url.split('wp')[0]}>{m.title.rendered}</Link></li>)}
            </ul> */}
        </>
    );
}
import Link from "next/link";
import client from "../../../config.js";
export default async function Menu(){
	let menuQuery = `query GetMenu($after: String) {
		menu(id: "header-menu", idType: SLUG) {
			menuItems(first: 100, after: $after) {
				nodes {
					id
					label
					url
					menuItemId
					parentId
					childItems {
						nodes {
							label
							uri
							menuItemId
						}
					}
				}
				pageInfo {
					hasNextPage
					endCursor
				}
			}
		}
	}`;
	let {menu: {menuItems: {nodes: allMenuItems}}} = await client.request(menuQuery);
	let parentMenus = allMenuItems.filter(menuItem => menuItem.parentId === null);
    return(
        <>
            <ul className='nav-items menu menu-desktop' aria-labelledby="nav-title">
				{parentMenus.map((menuItem, index) => (
					<li className={'menu-list-item'} key={index} data-id={`menu-${menuItem.menuItemId}-title`}>
						<Link href={`${menuItem.url}`} id={`menu-${menuItem.menuItemId}-title`} aria-expanded="false" className="mainmenu_main menu-item menu-item-has-children">{menuItem.label}</Link>
						{(() => {
							if(menuItem.childItems.nodes.length){
								return (
									<ul className="sub-menu" data-depth="0" aria-labelledby={`menu-${menuItem.menuItemId}-title`}>
										{menuItem.childItems.nodes.map((submenuItem, i) => (
											<li data-id={`menu-${submenuItem.menuItemId}-title`} className="sub-menu-item" key={i}>
												<Link href={submenuItem.uri} className="menu-item-link menu-item" title={submenuItem.label}>{submenuItem.label}</Link>
											</li>
										 ))}
										
									</ul>
								)
							}
						})()}
					</li>
				))}
                
            </ul>
        </>
    );
}
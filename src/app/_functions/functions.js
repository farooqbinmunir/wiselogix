import {APIROUT, KEY } from "@/app/exports";

export async function getData(api){
    const data = await fetch(api, {
        headers: {
            Authorization: `Basic ${KEY}`,
        }
    });
    const jsonData = await data.json();
    return jsonData;
}

export async function postData(pEndpoint, dataObject){
    const res = await fetch(pEndpoint, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataObject)
    });
    const response = await res.json();
    if(response === true){
        return true;
    }else{
        return response.code;
    }
}

export async function getSettings({queryKey}){
    let slug = queryKey[1];
    const settingsAPI = `${APIROUT}wp/v2/${slug}`;
    const data = await fetch(settingsAPI, {
        headers: {
            Authorization: `Basic ${KEY}`,
        }
    });
    const jsonData = await data.json();
    return jsonData;
}

export async function getLogo({queryKey}){
    let logoId = queryKey[1];
    const logoAPI = `${APIROUT}wp/v2/media/${logoId}`;
    const data = await fetch(logoAPI, {
        headers: {
            Authorization: `Basic ${KEY}`,
        }
    });
    const jsonData = await data.json();
    return jsonData;
}

export async function getMenus({queryKey}){
    let slug = queryKey[1];
    const menusAPI = `${APIROUT}wp/v2/menus?slug=${slug}`;
    const data = await fetch(menusAPI, {
        headers: {
            Authorization: `Basic ${KEY}`,
        }
    });
    const jsonData = await data.json();
    return jsonData;
}

export async function getMenusItems({queryKey}){
    let menuId = queryKey[1];
    const menuItemsAPI = `${APIROUT}wp/v2/menu-items?menus=${menuId}`;
    const data = await fetch(menuItemsAPI, {
        headers: {
            Authorization: `Basic ${KEY}`,
        }
    });
    const jsonData = await data.json();
    return jsonData;
}

export async function getHomepage({queryKey}){
    let slug = queryKey[1];
    const homepageAPI = `${APIROUT}wp/v2/pages?slug=${slug}`;
    const data = await fetch(homepageAPI, {
        headers: {
            Authorization: `Basic ${KEY}`,
        }
    });
    const jsonData = await data.json();
    return jsonData;
}

export async function getHomepageFeaturedImage({queryKey}){
    let heroImageId = queryKey[1];
    const heroImageAPI = `${APIROUT}wp/v2/media/${heroImageId}`;
    const data = await fetch(heroImageAPI, {
        headers: {
            Authorization: `Basic ${KEY}`,
        }
    });
    const jsonData = await data.json();
    return jsonData;
}
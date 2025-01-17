import Image from "next/image";
export default function IconsGroup({title, images}){
    return (
        <>
            <div className="banner_links_social w-50">
                <h4 className="banner_links_heading uppercase">{title}</h4>
                <div className="banner_links_wrap d-flex gap-10">
                    {
                        images.map(img => (
                            <div key={img.id} className="banner_link">
                                <Image src={img.url.src} className="banner_link_img banner_social_img_fb" width="20" height="20" title={img.title} alt={img.title} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

{/* <div className="banner_link">
    <Image src={Image_li} className="banner_link_img banner_social_img_li" width="20" height="20" title="Facebook Image" alt="Facebook Image" />
</div>
<div className="banner_link">
    <Image src={Image_tw} className="banner_link_img banner_social_img_tw" width="20" height="20" title="Facebook Image" alt="Facebook Image" />
</div> */}
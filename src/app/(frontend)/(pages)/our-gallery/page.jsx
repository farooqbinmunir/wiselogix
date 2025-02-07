import Link from 'next/link';
import Image from 'next/image';
import BannerGlobal from "../../../_components/BannerGlobal";


export const metadata = {
    title: "Gallery - Wiselogix Technologies",
    description: "Lorem ipsum dolor sitm...",
};
export default function Gallery(){

    return(
        <>
        <main id="fl-main-content" className="fl-page-content">
            <div className="container">
                <div className="row">
                    <BannerGlobal pageSlug="our-gallery" />
                    <div className="section_pad under_banner_section gallery_under_banner">
                        <div className="section_heading">
                            <h2>Fight Inequality. Beat Poverty.</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. 
                                Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.
                            </p>
                        </div>
                    </div>
                    <div className="section_pad gallery_section">
                        <div className="section_heading">
                            <h2>Our Gallery</h2>
                        </div>
                        <div className="gallery_wrapper">
                            <figure className="gallery_item">
                                <Link href="/assets/images/our-mission-header-girl-drinking-water.jpg" data-lightbox="gallery" title="Lorem, ipsum dolor sit amet consectetur adipisicing elit." title="This is a caption for the first image.">
                                    <div className="gallery_img">
                                        <Image width={`100`} height={`100`} src="/assets/images/our-mission-header-girl-drinking-water.jpg" alt="" />
                                    </div>
                                </Link>
                            </figure>
                            <figure className="gallery_item">
                                <Link href="/assets/images/careers.jpg" data-lightbox="gallery" title="Lorem, ipsum dolor sit amet consectetur adipisicing elit." title="This is a caption for the first image.">
                                    <div className="gallery_img">
                                        <Image width={`100`} height={`100`} src="/assets/images/careers.jpg" alt="" />
                                    </div>
                                </Link>
                            </figure>
                            <figure className="gallery_item">
                                <Link href="/assets/images/provacy-policy-woman-behind-metal-sheet.jpg" data-lightbox="gallery" title="Lorem, ipsum dolor sit amet consectetur adipisicing elit." title="This is a caption for the first image.">
                                    <div className="gallery_img">
                                        <Image width={`100`} height={`100`} src="/assets/images/provacy-policy-woman-behind-metal-sheet.jpg" alt="" />
                                    </div>
                                </Link>
                            </figure>
                            <figure className="gallery_item">
                                <Link href="/assets/images/contact-us-woman-in-village.jpg" data-lightbox="gallery" title="Lorem, ipsum dolor sit amet consectetur adipisicing elit." title="This is a caption for the first image.">
                                    <div className="gallery_img">
                                        <Image width={`100`} height={`100`} src="/assets/images/contact-us-woman-in-village.jpg" alt="" />
                                    </div>
                                </Link>
                            </figure>
                            <figure className="gallery_item">
                                <Link href="/assets/images/our-story-women-in-line.jpg" data-lightbox="gallery" title="Lorem, ipsum dolor sit amet consectetur adipisicing elit." title="This is a caption for the first image.">
                                    <div className="gallery_img">
                                        <Image width={`100`} height={`100`} src="/assets/images/our-story-women-in-line.jpg" alt="" />
                                    </div>
                                </Link>
                            </figure>
                            <figure className="gallery_item">
                                <Link href="/assets/images/OGB_111967_Elizabeth-and-her-son.jpg" data-lightbox="gallery" title="Lorem, ipsum dolor sit amet consectetur adipisicing elit." title="This is a caption for the first image.">
                                    <div className="gallery_img">
                                        <Image width={`100`} height={`100`} src="/assets/images/OGB_111967_Elizabeth-and-her-son.jpg" alt="" />
                                    </div>
                                </Link>
                            </figure>
                            <figure className="gallery_item">
                                <Link href="/assets/images/Hist-Polochic.jpg" data-lightbox="gallery" title="Lorem, ipsum dolor sit amet consectetur adipisicing elit." title="This is a caption for the first image.">
                                    <div className="gallery_img">
                                        <Image width={`100`} height={`100`} src="/assets/images/Hist-Polochic.jpg" alt="" />
                                    </div>
                                </Link>
                            </figure>
                            <figure className="gallery_item">
                                <Link href="/assets/images/InuruID-Indonesia.jpg">
                                    <div className="gallery_img" data-lightbox="gallery" title="Lorem, ipsum dolor sit amet consectetur adipisicing elit." title="This is a caption for the first image.">
                                        <Image width={`100`} height={`100`} src="/assets/images/InuruID-Indonesia.jpg" alt="" />
                                    </div>
                                </Link>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}
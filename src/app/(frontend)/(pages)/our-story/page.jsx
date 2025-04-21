import Link from 'next/link';
import Image from 'next/image';
import BannerGlobal from "../../../_components/BannerGlobal";
import client from '../../../../../config.js';

export const metadata = {
    title: "Our Story - Wiselogix Technologies",
    description: "Lorem ipsum dolor sitm...",
};
export default async function OurStory(){
    let contentQuery = `{
        page(id: "our-story", idType: URI) {
            link
            title(format: RAW)
            content
        }
    }`;

    const {page: {link, title, content}} = await client.request(contentQuery);
    const pageTitle = title.replace(/(<([^>]+)>)/ig, '');

    return(
        <>
        <main id="fl-main-content" className="fl-page-content">
            <div className="container">
                <div className="row">
                    <BannerGlobal pageSlug="our-story" />
                    <div id="elementor-content">
                        <div dangerouslySetInnerHTML={{__html: content}}></div>
                    </div>
                    <div className="section_pad under_banner_section story_under_banner">
                        <div className="section_heading">
                            <h2>
                                Fight Inequality. Beat Poverty.
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. 
                                Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.
                            </p>
                        </div>
                    </div>
                    <div className="section_pad quote_sectiion">
                        <div className="quote_inner_sectiion">
                            <div className="quote_img">
                                <Image width={`100`} height={`100`} src="/assets/images/test-image-of-woman.jpg" alt="" />
                            </div>
                            <div className="quote_text">
                                <div className="quote_description">
                                    <i className="icon-oxfam-icon-quotes" aria-hidden="true"></i>
                                    <span>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </span>
                                </div>
                                <div className="quote-caption" aria-hidden="true">
                                    <i className="ua-icon ua-icon-minus" aria-hidden="true"></i>
                                    <span className="caption-one">Akram Malik</span><br />
                                    <span className="caption-two">Zimbabwe</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section_pad get_involved_section women_rights">
                        <div className="section_heading">
                            <h2>
                                This is How We Fight for Women's Rights
                            </h2>
                        </div>
                        <div className="involved_icon_section_wrap">
                            <div className="involved_icon_item">
                                <div className="involved_icon">
                                    <i className="icon-oxfam-icon-mother-daughter" aria-hidden="true"></i>
                                </div>
                                <div className="involved_text">
                                    <Link href="#">We design every project with and for women</Link>
                                </div>
                            </div>
                            <div className="involved_icon_item">
                                <div className="involved_icon">
                                    <i className="icon-oxfam-icon-handshake" aria-hidden="true"></i>
                                </div>
                                <div className="involved_text">
                                    <Link href="#">We work with partners and women's rights organizations</Link>
                                </div>
                            </div>
                            <div className="involved_icon_item">
                                <div className="involved_icon">
                                    <i className="icon-oxfam-icon-sound" aria-hidden="true"></i>
                                </div>
                                <div className="involved_text">
                                    <Link href="#">We challenge policies and hold the powerful accountable</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section_pad why_women_section">
                        <div className="section_heading">
                            <h2>
                                Why Women's Rights?
                            </h2>
                        </div>
                        <div className="why_women_text_section">
                            <p>Have you ever wondered why:</p>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris sed tellus venenatis.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris sed tellus venenatis.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris sed tellus venenatis.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris sed tellus venenatis.</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.</p>
                        </div>
                        <div className="why_women_counter_box">
                            <div className="women_counter_item">
                                <h4><span>150</span>M</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.
                                </p>
                            </div>
                            <div className="women_counter_item">
                                <h4><span>30</span>%</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.
                                </p>
                            </div>
                            <div className="women_counter_item">
                                <h4><span>10</span>%</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="section_pad poverty_section">
                        <div className="poverty_section_1">
                            <p>
                                <span>Lorem ipsum dolor sit amet</span> consectetur. <strong>Adipiscing elit mauris sed tellus venenatis.</strong>
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="poverty_section_2">
                            <h3>We’ve Been in Canada Since 1963</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, 
                                mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, 
                                mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, 
                                mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}
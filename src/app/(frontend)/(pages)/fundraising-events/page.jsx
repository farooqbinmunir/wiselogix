import Link from 'next/link';
import BannerGlobal from "../../../_components/BannerGlobal";
<BannerGlobal pageSlug="our-story" />

export const metadata = {
    title: "Fundraising Events - Wiselogix Technologies",
    description: "Lorem ipsum dolor sitm...",
};
export default function FundraisingEvents(){

    return(
        <>
        <main id="fl-main-content" className="fl-page-content">
            <div className="container">
                <div className="row">
                    <div className="section_pad banner_section">
                        <div className="section_heading">
                            <h1>Support Through Fundraising</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="banner_button">
                            <div className="project_readmore">
                                <Link className="oxfam_button" href="#" >Get Started</Link>
                            </div>
                        </div>
                    </div>
                    <div className="section_pad under_banner_section">
                        <div className="section_heading">
                            <h2>
                                Would You Do Anything to End Poverty?
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. 
                                Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.
                            </p>
                        </div>
                    </div>
                    <div className="section_pad projects_section">
                        <div className="section_heading">
                            <h2>
                                Host Your Own Event
                            </h2>
                        </div>
                        <div className="projects_item_wrap">
                            <div className="projects_item">
                                <div className="projects_img">
                                    <div className="project_cpt_image"
                                        style={{"background": "url(/assets/images/Hist-Polochic.jpg) center center no-repeat;background-size:cover"}}>
                                    </div>
                                </div>
                                <div className="projects_text">
                                    <h3>
                                        DIY Fundraising
                                    </h3>
                                    <div className="project_description">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit 
                                            amet, mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.
                                        </p>
                                    </div>
                                    <div className="project_readmore">
                                        <Link className="oxfam_button" href="#" >Get Started</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="projects_item">
                                <div className="projects_img">
                                    <div className="project_cpt_image"
                                        style={{"background": "url(/assets/images/South-Sudan_education.png) center center no-repeat;background-size:cover"}}>
                                    </div>
                                </div>
                                <div className="projects_text">
                                    <h3>
                                        Hunger Banquet
                                    </h3>
                                    <div className="project_description">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.
                                        </p>
                                    </div>
                                    <div className="project_readmore">
                                        <Link className="oxfam_button" href="#" >Learn more</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="projects_item">
                                <div className="projects_img">
                                    <div className="project_cpt_image"
                                        style={{"background": "url(/assets/images/InuruID-Indonesia.jpg) center center no-repeat;background-size:cover"}}>
                                    </div>
                                </div>
                                <div className="projects_text">
                                    <h3>
                                        Pailwalker
                                    </h3>
                                    <div className="project_description">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.
                                        </p>
                                    </div>
                                    <div className="project_readmore">
                                        <Link className="oxfam_button" href="#" >Learn more</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="projects_item">
                                <div className="projects_img">
                                    <div className="project_cpt_image"
                                        style={{"background": "url(/assets/images/OGB_111967_Elizabeth-and-her-son.jpg) center center no-repeat;background-size:cover"}}>
                                    </div>
                                </div>
                                <div className="projects_text">
                                    <h3>
                                        Health
                                    </h3>
                                    <div className="project_description">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.
                                        </p>
                                    </div>
                                    <div className="project_readmore">
                                        <Link className="oxfam_button" href="#" >Learn more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}
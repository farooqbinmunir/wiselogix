import Link from 'next/link';
import BannerGlobal from "../../../_components/BannerGlobal";

export const metadata = {
    title: "Careers - Wiselogix Technologies",
    description: "Lorem ipsum dolor sitm...",
};
export default function Careers(){

    return(
        <>
        <main id="fl-main-content" className="fl-page-content">
            <div className="container">
                <div className="row">
                    
                    <BannerGlobal pageSlug="careers" />
                    <div className="section_pad under_banner_section">
                        <div className="section_heading">
                            <h2>Join Our Team & Discover Some of the Best Jobs in Canada</h2>
                        </div>
                        <div className="project_info">
                            <div className="project_desc">
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. 
                                    Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus. Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. 
                                    Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus. Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. 
                                    Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus. Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor.
                                </p>
                            </div>
                            <div className="project_meta">
                                <h3>Feedback Process</h3>
                                <div className="project_duration">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. 
                                        Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus. Lorem ipsum dolor sit amet, consectetur.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. 
                                        Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus. Lorem ipsum dolor sit amet, consectetur.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section_pad projects_section">
                        <div className="section_heading">
                            <h2>Our Values</h2>
                        </div>
                        <div className="projects_item_wrap">
                            <div className="projects_item">
                                <div className="projects_img">
                                    <div className="project_cpt_image"
                                        style={{"background": "url(/assets/images/Hist-Polochic.jpg) center center no-repeat;background-size:cover"}}>
                                    </div>
                                </div>
                                <div className="projects_text">
                                    <h3>Equality</h3>
                                    <div className="project_description">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus
                                            venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu
                                            auctor. Vivamus elementum sapien a lobortis rhoncus.
                                        </p>
                                    </div>
                                    <div className="project_readmore">
                                        <Link className="oxfam_button" href="#">Learn more</Link>
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
                                    <h3>Empowerment</h3>
                                    <div className="project_description">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus
                                            venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu
                                            auctor. Vivamus elementum sapien a lobortis rhoncus.
                                        </p>
                                    </div>
                                    <div className="project_readmore">
                                        <Link className="oxfam_button" href="#">Learn more</Link>
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
                                    <h3>Solidarity</h3>
                                    <div className="project_description">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus
                                            venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu
                                            auctor. Vivamus elementum sapien a lobortis rhoncus.
                                        </p>
                                    </div>
                                    <div className="project_readmore">
                                        <Link className="oxfam_button" href="#">Learn more</Link>
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
                                    <h3>Inclusiveness</h3>
                                    <div className="project_description">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus
                                            venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu
                                            auctor. Vivamus elementum sapien a lobortis rhoncus.
                                        </p>
                                    </div>
                                    <div className="project_readmore">
                                        <Link className="oxfam_button" href="#">Learn more</Link>
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
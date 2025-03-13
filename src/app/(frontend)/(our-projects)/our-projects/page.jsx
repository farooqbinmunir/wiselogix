import Link from 'next/link';
import BannerGlobal from "../../../_components/BannerGlobal";

export const metadata = {
    title: "Our Projects - Wiselogix Technologies",
    description: "Lorem ipsum dolor sitm...",
};
export default function OurProjects(){

    return(
        <>
        <main id="fl-main-content" className="fl-page-content">
            <div className="container">
                <div className="row">
                    <BannerGlobal pageSlug="projects" />
                    <div className="section_pad under_banner_section">
                        <div className="section_heading">
                            <h2>
                                Long-Term Solutions for a More Equal World
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
                                Explore Our Projects
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
                                        Our work with women and children
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
                                        style={{"background": "url(/assets/images/South-Sudan_education.png) center center no-repeat;background-size:cover"}}>
                                    </div>
                                </div>
                                <div className="projects_text">
                                    <h3>
                                        Championing Education for the Girl Child
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
                                        Assisting widows and the marginalized
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
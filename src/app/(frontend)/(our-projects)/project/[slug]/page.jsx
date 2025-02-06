import Link from 'next/link';
import Image from 'next/image';
import GACParternshipColourLogo from '../../../../../../public/assets/images/GAC-parternship-colour-logo.webp';
export default function Project({params}){
    let page = '';
    const projectSlug = params.slug;
    return (
        <>
        <main id="fl-main-content" className="fl-page-content">
            <div className="container">
                <div className="row">
                    <div className="section_pad banner_section">
                        <div className="section_heading">
                            <h3>Project: [{projectSlug}]</h3>
                            <h1>
                                Our First Development Project
                            </h1>
                            <p>
                                We believe that the best people to help communities living in poverty are community members themselves
                            </p>
                        </div>
                        <div className="banner_button">
                            <div className="project_readmore">
                                <Link className="oxfam_button" href="#" >Explore Projects</Link>
                            </div>
                        </div>
                    </div>
                    <div className="section_pad under_banner_section">
                        <div className="section_heading">
                            <h2>
                                The Situation
                            </h2>
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
                                <h3>DETAILS</h3>
                                <div className="project_location">
                                    <h4>Location</h4>
                                    <p>Guatemala</p>
                                </div>
                                <div className="project_duration">
                                    <h4>Duration</h4>
                                    <p>5 years (2019-2024)</p>
                                </div>
                                <div className="project_duration">
                                    <p>Lire la description du programme en français (PDF).</p>
                                </div>
                                <div className="project_supporters">
                                    <h4>Our Supporters</h4>
                                    <p>5 years (2019-2024)</p>
                                </div>
                                <div className="patner_logo">
                                    <Image src={GACParternshipColourLogo} alt="GAC parternship colour logo" />
                                </div>
                                <div className="impact_btn">
                                    <div className="project_readmore">
                                        <Link className="oxfam_button" href="#" >Our Impact in 2023 </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section_pad why_women_section issues_glance_section">
                        <div className="section_heading">
                            <h2>
                                Issues at a Glance
                            </h2>
                        </div>
                        <div className="why_women_text_section">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris sed tellus venenatis.</p>
                        </div>
                        <div className="why_women_counter_box">
                            <div className="women_counter_item">
                                <h4><span>80</span>%</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, 
                                    mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.
                                </p>
                            </div>
                            <div className="women_counter_item">
                                <h4><span>58</span>%</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, 
                                    mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.
                                </p>
                            </div>
                            <div className="women_counter_item">
                                <h4><span>20</span>%</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, 
                                    mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="section_pad get_involved_section we_doing">
                        <div className="section_heading">
                            <h2>
                                What are we doing?
                            </h2>
                        </div>
                        <div className="involved_icon_section_wrap">
                            <div className="involved_icon_item">
                                <div className="involved_icon">
                                    <i className="icon-oxfam-icon-sunshine" aria-hidden="true"></i>
                                </div>
                                <div className="involved_text">
                                    <h4>Awareness</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className="involved_icon_item">
                                <div className="involved_icon">
                                    <i className="icon-oxfam-icon-hand-1" aria-hidden="true"></i>
                                </div>
                                <div className="involved_text">
                                    <h4>Empowerment</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className="involved_icon_item">
                                <div className="involved_icon">
                                    <i className="icon-oxfam-icon-sound" aria-hidden="true"></i>
                                </div>
                                <div className="involved_text">
                                    <h4>Advocacy</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section_pad achieved_section">
                        <div className="achieved_text_1">
                            <h3>What have we achieved so far?</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. 
                                Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus. Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor.
                            </p>
                            <p>
                                This project has achieved significant milestones, including:
                            </p>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris sed tellus venenatis.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris sed tellus venenatis.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris sed tellus venenatis.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris sed tellus venenatis.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris sed tellus venenatis.</li>
                            </ul>
                        </div>
                        <div className="achieved_text_2">
                            <h3>What have we achieved so far?</h3>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris sed tellus venenatis.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris sed tellus venenatis.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris sed tellus venenatis.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris sed tellus venenatis.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris sed tellus venenatis.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}
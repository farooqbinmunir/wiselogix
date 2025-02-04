import Image from 'next/image';
import CandiceShawImgURL from "../../../../../public/assets/images/Candice-Shaw-700-px.webp";
import linkedinIconURL from "../../../../../public/assets/images/linkedin_icon.webp";
import lrhsImageURL from "../../../../../public/assets/images/LRHS.png";
import CarolinaPalaciosImageURL from "../../../../../public/assets/images/Carolina-Palacios.png";
export const metadata = {
    title: "Our Team - Wiselogix Technologies",
    description: "Lorem ipsum dolor sitm...",
};
export default function OurTeam(){

    return(
        <>
        <main id="fl-main-content" className="fl-page-content">
            <div className="container">
                <div className="row">
                    <div className="section_pad banner_section">
                        <div className="section_heading">
                            <h1>
                                Our Dedicated Team of Passionate Individuals
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus.
                            </p>
                        </div>
                        <div className="banner_button">
                            <div className="project_readmore">
                                <a className="oxfam_button" href="#" >Donate Now</a>
                            </div>
                        </div>
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
                    <div className="section_pad board_directors">
                        <div className="section_heading">
                            <h2>
                                Board of Directors, 2022-2025
                            </h2>
                        </div>
                        <div className="team_wapper">
                            <div className="team_item">
                                <div className="person_img_wrap">
                                    <div className="person_img">
                                        <Image src={CandiceShawImgURL} alt="" width={true} height={true} />
                                    </div>
                                    <div className="person_mask gray_mask"></div>
                                </div>
                                <div className="person_info">
                                    <div className="person_name">Akram Malik</div>
                                    <div className="person_designation">Board of Directors</div>
                                    <div className="person_social">
                                        <div className="person_linkedin">
                                            <a href="#" target="_blank">
                                                <Image className="linkedin_icon" src={linkedinIconURL} alt="" width={true} height={true} />
                                                <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="person_shortbio">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.
                                    </div>
                                    <div role="region" aria-labelledby="bio_button_41695">
                                        <button id="bio_button_41695" aria-controls="bio_41695" className="person_readmore" aria-expanded="false"><span aria-hidden="true">+</span> Full Bio<span className="sr-only"> for Candice Shaw</span></button>
                                        <div className="person_fullbio" id="bio_41695">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.<br />
                                            <br />
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.<br />
                                            <br />
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.<br />
                                            <br />
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section_pad executive_directors">
                        <div className="section_heading">
                            <h2>
                                Our Executive Director
                            </h2>
                        </div>
                        <div className="team_wapper">
                            <div className="team_item">
                                <div className="person_img_wrap">
                                    <div className="person_img">
                                        <Image src={lrhsImageURL} alt="" width={true} height={true} />
                                    </div>
                                    <div className="person_mask white_mask"></div>
                                </div>
                                <div className="person_info">
                                    <div className="person_name">Akram Malik</div>
                                    <div className="person_designation">Board of Directors</div>
                                    <div className="person_social">
                                        <div className="person_twitter">
                                            <a href="#" target="_blank">
                                                <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                        <div className="person_linkedin">
                                            <a href="#" target="_blank">
                                                <Image className="linkedin_icon" src={linkedinIconURL} alt="" width={true} height={true} />
                                                <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="person_shortbio">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.
                                    </div>
                                    <div role="region" aria-labelledby="bio_button_41695">
                                        <button id="bio_button_41695" aria-controls="bio_41695" className="person_readmore" aria-expanded="false"><span aria-hidden="true">+</span> Full Bio<span className="sr-only"> for Candice Shaw</span></button>
                                        <div className="person_fullbio" id="bio_41695">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.<br />
                                            <br />
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.<br />
                                            <br />
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.<br />
                                            <br />
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section_pad senior_leadership">
                        <div className="section_heading">
                            <h2>
                                Senior Leadership Team
                            </h2>
                        </div>
                        <div className="team_wapper">
                            <div className="team_item">
                                <div className="person_img_wrap">
                                    <div className="person_img">
                                        <Image src={CarolinaPalaciosImageURL} alt="" width={true} height={true} />
                                    </div>
                                    <div className="person_mask gray_mask"></div>
                                </div>
                                <div className="person_info">
                                    <div className="person_name">Akram Malik</div>
                                    <div className="person_designation">Board of Directors</div>
                                    <div className="person_social">
                                        <div className="person_linkedin">
                                            <a href="#" target="_blank">
                                                <Image className="linkedin_icon" src={linkedinIconURL} alt="" width={true} height={true} />
                                                <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="person_shortbio">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.
                                    </div>
                                    <div role="region" aria-labelledby="bio_button_41695">
                                        <button id="bio_button_41695" aria-controls="bio_41695" className="person_readmore" aria-expanded="false"><span aria-hidden="true">+</span> Full Bio<span className="sr-only"> for Candice Shaw</span></button>
                                        <div className="person_fullbio" id="bio_41695">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.<br />
                                            <br />
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.<br />
                                            <br />
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.<br />
                                            <br />
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus venenatis, luctus leo sit amet, mollis risus. Aenean elementum quis nunc eu auctor. Vivamus elementum sapien a lobortis rhoncus.
                                        </div>
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
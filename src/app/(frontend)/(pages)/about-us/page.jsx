import Link from 'next/link';
import BannerGlobal from "../../../_components/BannerGlobal";


export const metadata = {
    title: "About Us - Wiselogix Technologies",
    description: "Lorem ipsum dolor sitm...",
};
export default function Careers(){

    return(
        <>
        <main id="fl-main-content" className="fl-page-content">
            <div className="container">
                <div className="row">
                    <BannerGlobal pageSlug="about-us" />
                    <div className="section_pad under_banner_section">
                        <div className="section_heading">
                            <h2>The Situation</h2>
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
                </div>
            </div>
        </main>
        </>
    );
}
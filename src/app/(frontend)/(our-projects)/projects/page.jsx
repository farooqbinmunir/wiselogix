import Link from 'next/link';
import BannerGlobal from "../../../_components/BannerGlobal";
import client from '../../../../../config.js';

export const metadata = {
    title: "Our Projects - Wiselogix Technologies",
    description: "Lorem ipsum dolor sitm...",
};
export default async function OurProjects(){
    let projectsQuery = `{
        ourProjects {
            nodes {
                databaseId
                title(format: RAW)
                slug
                excerpt(format: RAW)
                content(format: RENDERED)
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
            }
        }
    }`;

    const {ourProjects: {nodes: projects}} = await client.request(projectsQuery);

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
                            <h2>Explore Our Projects</h2>
                        </div>
                        <div className="projects_item_wrap">
                            {projects.map((project, index) => {
                                const imgURL = project?.featuredImage?.node?.sourceUrl;
                                return (
                                    <div className="projects_item" key={index}>
                                        <div className="projects_img">
                                            <div className="project_cpt_image fbm" style={{
                                                "background": `url(${project?.featuredImage?.node?.sourceUrl}) center center no-repeat`,
                                                "backgroundSize": "cover",
                                                }
                                            }></div>
                                        </div>
                                        <div className="projects_text">
                                            <h3>
                                                {project.title}
                                            </h3>
                                            <div className="project_description">
                                                <p>
                                                    {project.excerpt}
                                                </p>
                                            </div>
                                            <div className="project_readmore">
                                                <Link className="oxfam_button" href={`/project/${project.slug}`} >Learn more</Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}
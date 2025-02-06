import Hgroup from "./Hgroup";
import Button from "./Button";
import Project_Posts from "./Project_Posts";
import client from "../../../config.js";
export default async function Section_Projects({cls=""}){
    const projectHeaderQuery = `{
        page(id: "home", idType: URI) {
            homeOurProjects {
                projectHeading
                projectSubheadingHighlighted
                projectDesc
                seeAllButton {
                    buttonText
                    buttonLink
                }
            }
        }
    }`;
    const {page: {homeOurProjects: projectsHeader}} = await client.request(projectHeaderQuery);
    return (
        <>
        <div id="section_compaigns" className={`${cls} fl-row fl-row-full-width fl-row-bg-color fl-node-fnsv9iphw5y2 fl-row-default-height fl-row-align-center`} data-node="fnsv9iphw5y2">
            <div className="fl-row-content-wrap">
                <div className="fl-row-content fl-row-fixed-width fl-node-content">

                    <div className="fl-col-group fl-node-dohufnws5yal" data-node="dohufnws5yal">
                        <div className="fl-col fl-node-2uvk1eo4this" data-node="2uvk1eo4this">
                            <div className="fl-col-content fl-node-content">
                                <Hgroup 
                                    headingTxt={projectsHeader.projectHeading} 
                                    textHighlight={projectsHeader.projectSubheadingHighlighted} 
                                    paraTxt={projectsHeader.projectDesc} 
                                    textAlign="center" />

                                <Project_Posts />
                                
                                <Button 
                                    btnTxt={projectsHeader.seeAllButton.buttonText}
                                    link={projectsHeader.seeAllButton.buttonLink} 
                                    align="center" 
                                    style={{marginTop: "30px", textTransform: "uppercase"}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
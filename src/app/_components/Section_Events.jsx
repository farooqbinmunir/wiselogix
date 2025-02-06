import Hgroup from "./Hgroup";
import Button from "./Button";
import Events_Posts from "./Events_Posts";
import client from "../../../config.js";
export default async function Section_HumanRights({cls=""}){

    const eventsHeaderQuery = `{
        page(id: "home", idType: URI){
            homeUpcomingEvents {
                eventsHeading
                eventsSubheadingHighlighted
                eventsDesc
                viewAllButton {
                    buttonText
                    buttonLink
                }
            }
        }
    }`;

    const {page: {homeUpcomingEvents: events}} = await client.request(eventsHeaderQuery);

    return (
        <div id="section_human_rights" className={`${cls} fl-row fl-row-full-width fl-row-bg-color fl-node-fnsv9iphw5y2 fl-row-default-height fl-row-align-center`} data-node="fnsv9iphw5y2">
            <div className="fl-row-content-wrap">
                <div className="fl-row-content fl-row-fixed-width fl-node-content">

                    <div className="fl-col-group fl-node-dohufnws5yal" data-node="dohufnws5yal">
                        <div className="fl-col fl-node-2uvk1eo4this" data-node="2uvk1eo4this">
                            <div className="fl-col-content fl-node-content">
                                <Hgroup 
                                    headingTxt={events.eventsHeading} 
                                    textHighlight={events.eventsSubheadingHighlighted} 
                                    paraTxt={events.eventsDesc} 
                                    textAlign="center" />

                                <Events_Posts />
                                
                                <Button btnTxt={events.viewAllButton.buttonText} link={events.viewAllButton.buttonLink} align="center" style={{marginTop: "30px"}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
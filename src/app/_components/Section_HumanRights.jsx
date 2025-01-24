import Hgroup from "./Hgroup";
import Button from "./Button";
import HR_Posts from "./HR_Posts";
export default function Section_HumanRights({cls=""}){
    return (
        <div id="section_human_rights" className={`${cls} fl-row fl-row-full-width fl-row-bg-color fl-node-fnsv9iphw5y2 fl-row-default-height fl-row-align-center`} data-node="fnsv9iphw5y2">
            <div className="fl-row-content-wrap">
                <div className="fl-row-content fl-row-fixed-width fl-node-content">

                    <div className="fl-col-group fl-node-dohufnws5yal" data-node="dohufnws5yal">
                        <div className="fl-col fl-node-2uvk1eo4this" data-node="2uvk1eo4this">
                            <div className="fl-col-content fl-node-content">
                                <Hgroup headingTxt="A Global Human Rights Initiative." textHighlight="Upcoming Events" paraTxt="Join us at our upcoming event focused on advancing women’s human rights and fostering gender equality." textAlign="center" />

                                <HR_Posts />
                                
                                <Button btnTxt="SEE ALL EVENT" align="center" style={{marginTop: "30px"}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
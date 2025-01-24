import Hgroup from "./Hgroup";
import Button from "./Button";
import Compaign_Posts from "./Compaign_Posts";
export default function Section_Compaigns({cls=""}){
    return (
        <>
        <div id="section_compaigns" className={`${cls} fl-row fl-row-full-width fl-row-bg-color fl-node-fnsv9iphw5y2 fl-row-default-height fl-row-align-center`} data-node="fnsv9iphw5y2">
            <div className="fl-row-content-wrap">
                <div className="fl-row-content fl-row-fixed-width fl-node-content">

                    <div className="fl-col-group fl-node-dohufnws5yal" data-node="dohufnws5yal">
                        <div className="fl-col fl-node-2uvk1eo4this" data-node="2uvk1eo4this">
                            <div className="fl-col-content fl-node-content">
                                <Hgroup headingTxt="Join the Fight for Women’s Rights" textHighlight="Campaigns" paraTxt="Our campaigns tackle critical issues, from ending violence to ensuring equal opportunities. Stand with us!" textAlign="center" />

                                <Compaign_Posts />
                                
                                <Button btnTxt="See All Compaigns" align="center" style={{marginTop: "30px", textTransform: "uppercase"}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
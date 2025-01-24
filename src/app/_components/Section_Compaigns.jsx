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

        {/* <div id="section_compaigns" className="fl-row fl-row-full-width fl-row-bg-none fl-node-zhf7rwmgj49t fl-row-default-height fl-row-align-center campaigns-section-wrap" data-node="zhf7rwmgj49t">
            <div className="fl-row-content-wrap">
                <div className="fl-row-content fl-row-fixed-width fl-node-content">

                    <div className="fl-col-group fl-node-f8r2xlasjq46" data-node="f8r2xlasjq46">
                    <div className="fl-col fl-node-ec4j3dsto50v fl-col-has-cols"
                        data-node="ec4j3dsto50v">
                        <div className="fl-col-content fl-node-content">
                        <div className="fl-module fl-module-heading fl-node-mur4ckqvxjti maxwidth800 marginauto"
                            data-node="mur4ckqvxjti">
                            <div className="fl-module-content fl-node-content">
                            <h2 className="fl-heading">
                                <span className="fl-heading-text">Join the Fight for Women’s Rights
                                <span>Campaigns</span></span>
                            </h2>
                            
                            <div className="fl-module-content fl-node-content">
                                <div className="fl-rich-text">
                                <p style={{
                                    textAlign: "center",
                                }}>
                                    Our campaigns tackle critical issues, from ending violence to ensuring equal opportunities. Stand with us!
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="fl-col-group fl-node-3u9sxohmr8vn fl-col-group-nested" data-node="3u9sxohmr8vn">
                            <div className="fl-col fl-node-m56t8whcli39 fl-col-small campaigns-section" data-node="m56t8whcli39">
                                <div className="fl-col-content fl-node-content">
                                    <div className="fl-module fl-module-photo fl-node-mvsxu21j8bkf" data-node="mvsxu21j8bkf">
                                    <div className="fl-module-content fl-node-content">
                                        <div className="fl-photo fl-photo-align-center" itemScope itemType="https://schema.org/ImageObject">
                                        <div className="fl-photo-content fl-photo-img-svg">
                                            <img loading="lazy" decoding="async" className="fl-photo-img wp-image-43139 size-full" src="assets/images/violence-against-women-on-step.jpg" alt="icon_new_womensrights" title="icon_new_womensrights" />
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="fl-module fl-module-heading fl-node-qa1dvgztusk0"
                                    data-node="qa1dvgztusk0">
                                    <div className="fl-module-content fl-node-content">
                                        <h3 className="fl-heading">
                                        <span className="fl-heading-text">Lorem ipsum dolor</span>
                                        </h3>
                                    </div>
                                    </div>
                                    <div className="fl-module fl-module-rich-text fl-node-mox8dywh0g4n"
                                    data-node="mox8dywh0g4n">
                                    <div className="fl-module-content fl-node-content">
                                        <div className="fl-rich-text">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, minima.</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="fl-module fl-module-button fl-node-iadf9qgc4m58 button_new2023 arrow_pink"
                                    data-node="iadf9qgc4m58">
                                    <div className="fl-module-content fl-node-content">
                                        <div
                                        className="fl-button-wrap fl-button-width-auto fl-button-center">
                                        <a href="#"
                                            target="_self" className="fl-button">
                                            <span className="fl-button-text">Read More</span>
                                        </a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="fl-module fl-module-button fl-node-slavu4f9j3ko button_new2023 arrow_black" data-node="slavu4f9j3ko">
                            <div className="fl-module-content fl-node-content">
                                <div className="fl-button-wrap fl-button-width-auto fl-button-center">
                                    <a href="#" target="_self" className="fl-button"><span className="fl-button-text">SEE ALL COMPAIGNS</span></a>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div> */}
        </>
    );
}